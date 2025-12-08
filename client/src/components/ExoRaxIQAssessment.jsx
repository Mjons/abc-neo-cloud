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

  // Start assessment state (for capturing info upfront)
  const [startingAssessment, setStartingAssessment] = useState(false);

  // PDF download state
  const [downloadingPDF, setDownloadingPDF] = useState(false);

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

  // Handler to download assessment results as PDF
  const handleDownloadPDF = () => {
    setDownloadingPDF(true);

    try {
      // Generate PDF from assessment data
      const pdfBlob = generateAssessmentPDF({
        facilityInfo,
        ratings,
        scores,
        quadrant
      });

      // Create download link
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `EXORAX_IQ_Assessment_${facilityInfo.name.replace(/\s+/g, '_')}.pdf`;

      // Trigger download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log('✅ PDF downloaded successfully:', pdfBlob.size, 'bytes');
    } catch (error) {
      console.error('PDF download error:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setDownloadingPDF(false);
    }
  };

  const DotRating = ({ value, max = 4 }) => (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full border-2 transition-all ${
            i < value
              ? 'bg-cyan-500 border-cyan-500'
              : value === 0
                ? 'bg-muted border-muted-foreground/30'
                : 'bg-background border-border'
          }`}
        />
      ))}
    </div>
  );

  // INTRO SCREEN
  if (step === 'intro') {
    return (
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background gradient matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-background to-purple-500/5" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `
        }} />

        <div className="container relative">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  EXORAX IQ Assessment
                </span>
              </h2>
              <p className="text-muted-foreground">Data Center Readiness Assessment</p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-xl shadow-cyan-500/5 relative overflow-hidden">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

              <h3 className="text-xl font-semibold mb-2 text-foreground">Evaluate Your Facility</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Assess how your existing power infrastructure scores for hyperscale AI workload deployment.
                Get placed on our readiness quadrant and receive your EXORAX IQ Rating.
              </p>

              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Facility / Site Name *"
                  value={facilityInfo.name}
                  onChange={(e) => setFacilityInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Location (City, State/Country)"
                  value={facilityInfo.location}
                  onChange={(e) => setFacilityInfo(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Target MW Capacity"
                  value={facilityInfo.targetMW}
                  onChange={(e) => setFacilityInfo(prev => ({ ...prev, targetMW: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                />
                <div className="border-t border-border pt-4 mt-4">
                  <p className="text-xs text-muted-foreground mb-3 font-medium">Contact Information</p>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={facilityInfo.contactName}
                      onChange={(e) => setFacilityInfo(prev => ({ ...prev, contactName: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      value={facilityInfo.email}
                      onChange={(e) => setFacilityInfo(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={facilityInfo.company}
                      onChange={(e) => setFacilityInfo(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleStartAssessment}
                disabled={!facilityInfo.name || !facilityInfo.email || !facilityInfo.contactName || startingAssessment}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-muted disabled:to-muted disabled:text-muted-foreground disabled:cursor-not-allowed font-medium transition-all text-sm text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                {startingAssessment ? 'Saving your info...' : 'Start Assessment →'}
              </button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Assessment covers {categories.length} categories across 94 evaluation criteria
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ASSESSMENT SCREEN
  if (step === 'assessment') {
    return (
      <section className="py-20 relative overflow-hidden min-h-screen">
        {/* Background gradient matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-background to-purple-500/5" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
          `
        }} />

        <div className="container relative">
          <div className="max-w-xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    EXORAX IQ
                  </span>
                </h2>
                <span className="text-xs text-muted-foreground">{currentCategory + 1} of {categories.length}</span>
              </div>
              <p className="text-muted-foreground text-sm">{facilityInfo.name}</p>

              {/* Progress bar */}
              <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${((currentCategory + 1) / categories.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-xl shadow-cyan-500/5 relative overflow-hidden">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground">Weight: {cat.weight}% of total score</p>
                </div>
                {ratings[cat.id] !== undefined && <DotRating value={ratings[cat.id]} />}
              </div>

              {/* Critical items */}
              {cat.criticalItems.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-medium text-red-400 mb-2">CRITICAL ITEMS</p>
                  <ul className="space-y-1">
                    {cat.criticalItems.map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
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
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-amber-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3">How does your facility rate in this category?</p>
                <div className="grid grid-cols-5 gap-2">
                  {[0, 1, 2, 3, 4].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRating(cat.id, value)}
                      className={`py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                        ratings[cat.id] === value
                          ? value === 0
                            ? 'bg-muted text-foreground'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
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
                    className="flex-1 py-2.5 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors text-sm"
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
                  className={`flex-1 py-2.5 rounded-lg font-medium transition-all text-sm ${
                    ratings[cat.id] !== undefined && !(currentCategory === categories.length - 1 && submitAssessment.isPending)
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
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
            <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
              {categories.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setCurrentCategory(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                    i === currentCategory
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : ratings[c.id] !== undefined
                        ? 'bg-muted text-cyan-400'
                        : 'bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // RESULTS SCREEN
  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-background to-purple-500/5" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
        `
      }} />

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                EXORAX IQ Results
              </span>
            </h2>
            <p className="text-muted-foreground text-sm">{facilityInfo.name}</p>
            {facilityInfo.location && <p className="text-muted-foreground/60 text-xs">{facilityInfo.location}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Quadrant */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-border shadow-xl shadow-cyan-500/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground">READINESS QUADRANT</h3>

              <div className="relative aspect-square bg-background/50 rounded-xl overflow-hidden border border-border">
                {/* Grid */}
                <div className="absolute inset-0 flex"><div className="w-1/2 border-r border-border/50"></div></div>
                <div className="absolute inset-0 flex flex-col"><div className="h-1/2 border-b border-border/50"></div></div>

                {/* Quadrant backgrounds */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/10"></div>
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/10"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-500/10"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-muted/30"></div>

                {/* Labels */}
                <div className="absolute top-2 left-2 text-xs text-blue-400 font-medium">High Potential</div>
                <div className="absolute top-2 right-2 text-xs text-cyan-400 font-medium text-right">Prime</div>
                <div className="absolute bottom-2 left-2 text-xs text-muted-foreground font-medium">Develop</div>
                <div className="absolute bottom-2 right-2 text-xs text-amber-400 font-medium text-right">Optimize</div>

                {/* Axis labels */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">Infrastructure Readiness →</div>
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 rotate-[-90deg] text-xs text-muted-foreground whitespace-nowrap">Scalability →</div>

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
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-border shadow-xl shadow-cyan-500/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
              <h3 className="text-sm font-semibold mb-4 text-muted-foreground">EXORAX IQ RATING</h3>

              <div className="text-center mb-4">
                <div className="text-5xl font-bold mb-1" style={{ color: quadrant.color }}>
                  {Math.round(scores.overall)}
                </div>
                <div className="text-lg font-semibold" style={{ color: quadrant.color }}>
                  {quadrant.label}
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mb-4">{quadrant.description}</p>

              <div className="bg-background/50 rounded-lg p-3 mb-4 border border-border">
                <p className="text-xs font-medium text-muted-foreground mb-1">RECOMMENDED ACTION</p>
                <p className="text-sm text-foreground">{quadrant.action}</p>
              </div>

              <div className="space-y-2">
                {[
                  { label: 'Infrastructure Readiness', value: scores.readiness, color: '#06b6d4' },
                  { label: 'Scalability Potential', value: scores.scalability, color: '#3b82f6' },
                  { label: 'Operational Maturity', value: scores.operational, color: '#a855f7' }
                ].map(score => (
                  <div key={score.label} className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{score.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${score.value}%`, backgroundColor: score.color }}
                        />
                      </div>
                      <span className="text-xs w-6 text-right text-foreground">{Math.round(score.value)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="mt-4 bg-card/80 backdrop-blur-sm rounded-2xl p-5 border border-border shadow-xl shadow-cyan-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground">CATEGORY BREAKDOWN</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between bg-background/50 rounded-lg p-3 border border-border">
                  <div>
                    <p className="text-xs font-medium text-foreground truncate" style={{ maxWidth: '140px' }}>{cat.name}</p>
                    <p className="text-xs text-muted-foreground">{cat.weight}% weight</p>
                  </div>
                  <DotRating value={ratings[cat.id] || 0} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-5 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground">Download Your Assessment Report</h3>
                <p className="text-sm text-muted-foreground">Get a detailed PDF report of your facility's readiness analysis.</p>
              </div>
              <button
                onClick={handleDownloadPDF}
                disabled={downloadingPDF}
                className={`px-5 py-2.5 rounded-lg font-medium whitespace-nowrap transition-all text-sm ${
                  downloadingPDF
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                }`}
              >
                {downloadingPDF ? 'Generating...' : 'Download PDF'}
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
              className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
            >
              Start new assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
