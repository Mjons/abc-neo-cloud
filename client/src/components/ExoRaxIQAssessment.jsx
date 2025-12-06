import { useState } from 'react';
import { useSubmitExoRaxIQAssessment } from '@/hooks/useExoRaxIQAssessment';
import { generateAssessmentPDF } from '@/lib/generateAssessmentPDF';

const categories = [
  {
    id: 'utility',
    name: 'Utility & Grid Infrastructure',
    weight: 20,
    criticalItems: [
      'Critical IT load capacity availability',
      'Utility provider reliability and grid stability',
      'Dual utility feeds from separate substations',
      'Feed redundancy (utility or nat gas, behind the meter)',
      'Substation capacity and proximity'
    ],
    highItems: [
      'Power Purchase Agreement (PPA) in place',
      'Rate structure and curtailment policy',
      'Generator fuel delivery infrastructure',
      'Power durability (diesel, BESS, co-gen)'
    ]
  },
  {
    id: 'network',
    name: 'Network & Connectivity',
    weight: 12,
    criticalItems: [
      'Carrier hotels and meet-me-rooms',
      'Number of carrier options and diversity',
      'Fiber entry points and path diversity',
      'Dark fiber availability'
    ],
    highItems: [
      'Distance/latency to major internet exchanges',
      'Direct connect to AWS, Azure, GCP',
      'BGP peering options'
    ]
  },
  {
    id: 'location',
    name: 'Site Location & Geography',
    weight: 10,
    criticalItems: [
      'Natural disaster risk profile',
      'Flood zone designation and elevation',
      'Operations/staff, smarthands, after hours SLAs'
    ],
    highItems: [
      'Seismic zone rating',
      'Climate considerations for cooling'
    ]
  },
  {
    id: 'regulatory',
    name: 'Regulatory & Compliance',
    weight: 8,
    criticalItems: [],
    highItems: [
      'Tax incentives for data centers',
      'Sales tax on equipment and electricity',
      'Political stability re: data centers',
      'Data residency and sovereignty requirements'
    ]
  },
  {
    id: 'building',
    name: 'Building Infrastructure',
    weight: 18,
    criticalItems: [
      'Access security (site, building, data hall, cage, rack)',
      'Floor load capacity for dense GPU racks',
      'Slab on grade or raised floor capacity',
      'Per rack power densities, liquid cooling',
      '415v whip PDU topology',
      'Liquid cooling loop metrics',
      'Fire suppression system'
    ],
    highItems: [
      'Building age and structural condition',
      'Roof condition and leak history',
      'Ceiling height in deployment areas',
      'Data hall footprint'
    ]
  },
  {
    id: 'expansion',
    name: 'Expansion & Future Capacity',
    weight: 10,
    criticalItems: [],
    highItems: [
      'Available adjacent space for growth',
      'Power capacity headroom beyond 50MW',
      'Cooling infrastructure scalability',
      'Right of first refusal on expansion'
    ]
  },
  {
    id: 'financial',
    name: 'Financial & Commercial',
    weight: 12,
    criticalItems: [
      'Landlord financial stability',
      'Base rent vs. usage-based breakdown',
      'Power cost pass-through mechanism',
      'Minimal power utilization rate',
      'PUE actual or projected',
      'Penalties for SLA breaches'
    ],
    highItems: [
      'CAM charges',
      'Installation allowances',
      'Security deposit requirements',
      'Price escalation terms'
    ]
  },
  {
    id: 'insurance',
    name: 'Insurance & Liability',
    weight: 5,
    criticalItems: [
      'SLA credits for outages'
    ],
    highItems: [
      'Facility insurance coverage',
      'Business interruption insurance',
      'Liability caps'
    ]
  },
  {
    id: 'operator',
    name: 'Owner/Operator Track Record',
    weight: 5,
    criticalItems: [
      'Customer references from similar deployments'
    ],
    highItems: [
      'Years in business',
      'Management team experience',
      'Financial backing'
    ]
  }
];

const priorityLabels = ['Unknown', 'Poor', 'Fair', 'Good', 'Excellent'];

export default function ExoRaxIQAssessment() {
  const [step, setStep] = useState('intro');
  const [currentCategory, setCurrentCategory] = useState(0);
  const [ratings, setRatings] = useState({});
  const [facilityInfo, setFacilityInfo] = useState({
    name: '',
    location: '',
    contactName: '',
    email: '',
    company: '',
    targetMW: ''
  });

  // Supabase submission hook
  const submitAssessment = useSubmitExoRaxIQAssessment();

  // Email sending state
  const [emailStatus, setEmailStatus] = useState({
    sending: false,
    sent: false,
    error: null
  });

  // Start assessment state (for capturing info upfront)
  const [startingAssessment, setStartingAssessment] = useState(false);

  const handleRating = (categoryId, value) => {
    setRatings(prev => ({ ...prev, [categoryId]: value }));
  };

  // Handler to capture facility info when starting assessment
  const handleStartAssessment = async () => {
    setStartingAssessment(true);

    try {
      // Submit initial facility info to database before assessment starts
      await submitAssessment.mutateAsync({
        facilityInfo,
        ratings: {}, // Empty ratings - they haven't started yet
        scores: {
          overall: 0,
          readiness: 0,
          scalability: 0,
          operational: 0
        },
        quadrant: {
          label: 'In Progress',
          color: '#6b7280',
          description: 'Assessment started but not completed',
          action: 'Complete assessment to see results'
        }
      });

      // Successfully saved, proceed to assessment
      setStep('assessment');
    } catch (error) {
      console.error('Failed to save initial info:', error);
      // Proceed to assessment anyway (offline-first)
      // They can still complete the assessment, it will save at the end
      setStep('assessment');
    } finally {
      setStartingAssessment(false);
    }
  };

  const calculateScores = () => {
    // Infrastructure readiness: utility, building, network, location
    const readinessCategories = ['utility', 'building', 'network', 'location'];
    // Scalability: expansion, financial, regulatory
    const scalabilityCategories = ['expansion', 'financial', 'regulatory'];
    // Operational: insurance, operator
    const operationalCategories = ['insurance', 'operator'];

    const calcWeightedScore = (cats) => {
      let totalWeight = 0;
      let weightedSum = 0;
      cats.forEach(catId => {
        const cat = categories.find(c => c.id === catId);
        if (cat && ratings[catId] !== undefined) {
          totalWeight += cat.weight;
          weightedSum += (ratings[catId] / 4) * cat.weight;
        }
      });
      return totalWeight > 0 ? (weightedSum / totalWeight) * 100 : 0;
    };

    const readiness = calcWeightedScore(readinessCategories);
    const scalability = calcWeightedScore(scalabilityCategories);
    const operational = calcWeightedScore(operationalCategories);

    // Overall weighted by all categories
    let totalWeight = 0;
    let weightedSum = 0;
    categories.forEach(cat => {
      if (ratings[cat.id] !== undefined) {
        totalWeight += cat.weight;
        weightedSum += (ratings[cat.id] / 4) * cat.weight;
      }
    });
    const overall = totalWeight > 0 ? (weightedSum / totalWeight) * 100 : 0;

    return { readiness, scalability, operational, overall };
  };

  const getQuadrant = (scores) => {
    if (scores.readiness >= 60 && scores.scalability >= 60) {
      return {
        label: 'Prime Candidate',
        color: '#10b981',
        description: 'High infrastructure readiness with strong growth potential. Ideal for rapid AI workload deployment.',
        action: 'Fast-track for deployment assessment'
      };
    }
    if (scores.readiness < 60 && scores.scalability >= 60) {
      return {
        label: 'High Potential',
        color: '#3b82f6',
        description: 'Strong scalability but infrastructure needs development. Worth investing in upgrades.',
        action: 'Infrastructure upgrade assessment needed'
      };
    }
    if (scores.readiness >= 60 && scores.scalability < 60) {
      return {
        label: 'Optimize First',
        color: '#f59e0b',
        description: 'Solid foundation but limited expansion capacity. Good for specific bounded workloads.',
        action: 'Evaluate for single-deployment scenarios'
      };
    }
    return {
      label: 'Develop',
      color: '#6b7280',
      description: 'Requires significant investment before deployment. Long-term opportunity only.',
      action: 'Not recommended at this time'
    };
  };

  const scores = calculateScores();
  const quadrant = getQuadrant(scores);
  const cat = categories[currentCategory];

  // Handler to submit assessment and show results
  const handleViewResults = () => {
    // Submit assessment to Supabase with UPSERT
    submitAssessment.mutate(
      {
        facilityInfo,
        ratings,
        scores,
        quadrant
      },
      {
        onSuccess: () => {
          // Show results after successful submission
          setStep('results');
        },
        onError: (error) => {
          // Show results anyway (offline-first UX)
          // Data is still available locally for user to see
          console.error('Failed to save assessment:', error);
          setStep('results');
        }
      }
    );
  };

  // Handler to email assessment results as PDF
  const handleEmailResults = async () => {
    setEmailStatus({ sending: true, sent: false, error: null });

    try {
      // Generate PDF from assessment data
      const pdfBlob = generateAssessmentPDF({
        facilityInfo,
        ratings,
        scores,
        quadrant
      });

      // Check if we're in development mode
      const isDevelopment = import.meta.env.DEV;

      if (isDevelopment) {
        // DEVELOPMENT MODE: Mock email sending
        // API routes don't work in Vite dev server (only work on Vercel)
        // Simulate delay and show success message for testing
        console.log('📧 [DEV MODE] Email would be sent to:', facilityInfo.email);
        console.log('📄 [DEV MODE] PDF generated successfully:', pdfBlob.size, 'bytes');

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        setEmailStatus({ sending: false, sent: true, error: null });

        // Show dev mode notice in console
        console.log('✅ [DEV MODE] Email mocked successfully. In production, this will send a real email via Resend.');

      } else {
        // PRODUCTION MODE: Actually send email via Vercel serverless function

        // Convert blob to base64 for API transmission
        const reader = new FileReader();
        const pdfBase64 = await new Promise((resolve, reject) => {
          reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(pdfBlob);
        });

        // Call serverless function to send email
        const response = await fetch('/api/send-assessment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: facilityInfo.email,
            pdfBase64,
            facilityName: facilityInfo.name,
            score: Math.round(scores.overall),
            quadrant: quadrant.label
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send email');
        }

        setEmailStatus({ sending: false, sent: true, error: null });
      }

      // Reset success message after 5 seconds
      setTimeout(() => {
        setEmailStatus(prev => ({ ...prev, sent: false }));
      }, 5000);

    } catch (error) {
      console.error('Email error:', error);
      setEmailStatus({
        sending: false,
        sent: false,
        error: error.message || 'Failed to send email. Please try again.'
      });

      // Reset error message after 8 seconds
      setTimeout(() => {
        setEmailStatus(prev => ({ ...prev, error: null }));
      }, 8000);
    }
  };

  const DotRating = ({ value, max = 4 }) => (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full border-2 transition-all ${
            i < value
              ? 'bg-emerald-500 border-emerald-500'
              : value === 0
                ? 'bg-slate-600 border-slate-500'
                : 'bg-slate-800 border-slate-600'
          }`}
        />
      ))}
    </div>
  );

  // INTRO SCREEN
  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">EXORAX IQ</h1>
            <p className="text-slate-400 text-sm">Data Center Readiness Assessment</p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur border border-slate-700">
            <h2 className="text-xl font-semibold mb-2">Evaluate Your Facility</h2>
            <p className="text-slate-400 text-sm mb-6">
              Assess how your existing power infrastructure scores for hyperscale AI workload deployment.
              Get placed on our readiness quadrant and receive your EXORAX IQ Rating.
            </p>

            <div className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Facility / Site Name *"
                value={facilityInfo.name}
                onChange={(e) => setFacilityInfo(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
              />
              <input
                type="text"
                placeholder="Location (City, State/Country)"
                value={facilityInfo.location}
                onChange={(e) => setFacilityInfo(prev => ({ ...prev, location: e.target.value }))}
                className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
              />
              <input
                type="text"
                placeholder="Target MW Capacity"
                value={facilityInfo.targetMW}
                onChange={(e) => setFacilityInfo(prev => ({ ...prev, targetMW: e.target.value }))}
                className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
              />
              <div className="border-t border-slate-700 pt-3 mt-3">
                <p className="text-xs text-slate-500 mb-3">Contact Information</p>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={facilityInfo.contactName}
                    onChange={(e) => setFacilityInfo(prev => ({ ...prev, contactName: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    value={facilityInfo.email}
                    onChange={(e) => setFacilityInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={facilityInfo.company}
                    onChange={(e) => setFacilityInfo(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleStartAssessment}
              disabled={!facilityInfo.name || !facilityInfo.email || !facilityInfo.contactName || startingAssessment}
              className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed font-medium transition-colors text-sm"
            >
              {startingAssessment ? 'Saving your info...' : 'Start Assessment →'}
            </button>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Assessment covers {categories.length} categories across 94 evaluation criteria
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ASSESSMENT SCREEN
  if (step === 'assessment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
        <div className="max-w-xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-2xl font-bold tracking-tight">EXORAX IQ</h1>
              <span className="text-xs text-slate-500">{currentCategory + 1} of {categories.length}</span>
            </div>
            <p className="text-slate-400 text-sm">{facilityInfo.name}</p>

            {/* Progress bar */}
            <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${((currentCategory + 1) / categories.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur border border-slate-700">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">{cat.name}</h2>
                <p className="text-xs text-slate-500">Weight: {cat.weight}% of total score</p>
              </div>
              {ratings[cat.id] !== undefined && <DotRating value={ratings[cat.id]} />}
            </div>

            {/* Critical items */}
            {cat.criticalItems.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-medium text-red-400 mb-2">CRITICAL ITEMS</p>
                <ul className="space-y-1">
                  {cat.criticalItems.map((item, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* High priority items */}
            {cat.highItems.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-medium text-amber-400 mb-2">HIGH PRIORITY</p>
                <ul className="space-y-1">
                  {cat.highItems.map((item, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-slate-700 pt-4">
              <p className="text-xs text-slate-500 mb-3">How does your facility rate in this category?</p>
              <div className="grid grid-cols-5 gap-2">
                {[0, 1, 2, 3, 4].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleRating(cat.id, value)}
                    className={`py-2 px-1 rounded-lg text-xs font-medium transition-colors ${
                      ratings[cat.id] === value
                        ? value === 0
                          ? 'bg-slate-600 text-white'
                          : 'bg-emerald-600 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {priorityLabels[value]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {currentCategory > 0 && (
                <button
                  onClick={() => setCurrentCategory(prev => prev - 1)}
                  className="flex-1 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 font-medium transition-colors text-sm"
                >
                  ← Back
                </button>
              )}
              <button
                onClick={() => {
                  if (currentCategory < categories.length - 1) {
                    setCurrentCategory(prev => prev + 1);
                  } else {
                    handleViewResults();
                  }
                }}
                disabled={ratings[cat.id] === undefined || (currentCategory === categories.length - 1 && submitAssessment.isPending)}
                className={`flex-1 py-2.5 rounded-lg font-medium transition-colors text-sm ${
                  ratings[cat.id] !== undefined && !(currentCategory === categories.length - 1 && submitAssessment.isPending)
                    ? 'bg-emerald-600 hover:bg-emerald-500'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                {currentCategory < categories.length - 1
                  ? 'Next →'
                  : submitAssessment.isPending
                    ? 'Saving...'
                    : 'View Results →'}
              </button>
            </div>
          </div>

          {/* Category quick nav */}
          <div className="mt-4 flex flex-wrap gap-1 justify-center">
            {categories.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setCurrentCategory(i)}
                className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                  i === currentCategory
                    ? 'bg-emerald-600 text-white'
                    : ratings[c.id] !== undefined
                      ? 'bg-slate-700 text-emerald-400'
                      : 'bg-slate-800 text-slate-500'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // RESULTS SCREEN
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">EXORAX IQ</h1>
          <p className="text-slate-400 text-sm">Assessment Results: {facilityInfo.name}</p>
          {facilityInfo.location && <p className="text-slate-500 text-xs">{facilityInfo.location}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Quadrant */}
          <div className="bg-slate-800/50 rounded-2xl p-5 backdrop-blur border border-slate-700">
            <h2 className="text-sm font-semibold mb-4 text-slate-400">READINESS QUADRANT</h2>

            <div className="relative aspect-square bg-slate-900 rounded-xl overflow-hidden">
              {/* Grid */}
              <div className="absolute inset-0 flex"><div className="w-1/2 border-r border-slate-700/50"></div></div>
              <div className="absolute inset-0 flex flex-col"><div className="h-1/2 border-b border-slate-700/50"></div></div>

              {/* Quadrant backgrounds */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-500/10"></div>
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/10"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-500/10"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-500/10"></div>

              {/* Labels */}
              <div className="absolute top-2 left-2 text-xs text-blue-400 font-medium">High Potential</div>
              <div className="absolute top-2 right-2 text-xs text-emerald-400 font-medium text-right">Prime</div>
              <div className="absolute bottom-2 left-2 text-xs text-slate-500 font-medium">Develop</div>
              <div className="absolute bottom-2 right-2 text-xs text-amber-400 font-medium text-right">Optimize</div>

              {/* Axis labels */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-slate-500">Infrastructure Readiness →</div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 rotate-[-90deg] text-xs text-slate-500 whitespace-nowrap">Scalability →</div>

              {/* Plot point */}
              <div
                className="absolute w-4 h-4 rounded-full shadow-lg transform -translate-x-1/2 translate-y-1/2 transition-all duration-700 z-10"
                style={{
                  left: `${Math.max(5, Math.min(95, scores.readiness))}%`,
                  bottom: `${Math.max(5, Math.min(95, scores.scalability))}%`,
                  backgroundColor: quadrant.color,
                  boxShadow: `0 0 20px ${quadrant.color}80`
                }}
              />
            </div>
          </div>

          {/* Score Card */}
          <div className="bg-slate-800/50 rounded-2xl p-5 backdrop-blur border border-slate-700">
            <h2 className="text-sm font-semibold mb-4 text-slate-400">EXORAX IQ RATING</h2>

            <div className="text-center mb-4">
              <div className="text-5xl font-bold mb-1" style={{ color: quadrant.color }}>
                {Math.round(scores.overall)}
              </div>
              <div className="text-lg font-semibold" style={{ color: quadrant.color }}>
                {quadrant.label}
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center mb-4">{quadrant.description}</p>

            <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
              <p className="text-xs font-medium text-slate-500 mb-1">RECOMMENDED ACTION</p>
              <p className="text-sm text-white">{quadrant.action}</p>
            </div>

            <div className="space-y-2">
              {[
                { label: 'Infrastructure Readiness', value: scores.readiness, color: '#10b981' },
                { label: 'Scalability Potential', value: scores.scalability, color: '#3b82f6' },
                { label: 'Operational Maturity', value: scores.operational, color: '#f59e0b' }
              ].map(score => (
                <div key={score.label} className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">{score.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${score.value}%`, backgroundColor: score.color }}
                      />
                    </div>
                    <span className="text-xs w-6 text-right">{Math.round(score.value)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mt-4 bg-slate-800/50 rounded-2xl p-5 backdrop-blur border border-slate-700">
          <h2 className="text-sm font-semibold mb-4 text-slate-400">CATEGORY BREAKDOWN</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <div key={cat.id} className="flex items-center justify-between bg-slate-900/30 rounded-lg p-3">
                <div>
                  <p className="text-xs font-medium text-white truncate" style={{ maxWidth: '140px' }}>{cat.name}</p>
                  <p className="text-xs text-slate-500">{cat.weight}% weight</p>
                </div>
                <DotRating value={ratings[cat.id] || 0} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 bg-gradient-to-r from-emerald-900/40 to-emerald-800/20 rounded-2xl p-5 border border-emerald-800/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold">Ready to deploy AI workloads?</h3>
              <p className="text-sm text-slate-400">Our team can help you optimize your existing power infrastructure.</p>

              {/* Status messages */}
              {emailStatus.sent && (
                <div className="mt-3 p-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg">
                  <p className="text-xs text-emerald-300">
                    ✓ Results sent to {facilityInfo.email}
                  </p>
                </div>
              )}
              {emailStatus.error && (
                <div className="mt-3 p-2 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-xs text-red-300">
                    ✗ {emailStatus.error}
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={handleEmailResults}
              disabled={emailStatus.sending}
              className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-colors text-sm ${
                emailStatus.sending
                  ? 'bg-emerald-700 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              {emailStatus.sending ? 'Sending...' : 'Email My Results'}
            </button>
          </div>
        </div>

        {/* Restart */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setStep('intro');
              setCurrentCategory(0);
              setRatings({});
              setFacilityInfo({ name: '', location: '', contactName: '', email: '', company: '', targetMW: '' });
            }}
            className="text-xs text-slate-500 hover:text-slate-400 underline"
          >
            Start new assessment
          </button>
        </div>
      </div>
    </div>
  );
}
