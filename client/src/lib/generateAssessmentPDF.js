import jsPDF from 'jspdf';

/**
 * Generates a PDF report for ExoRaxIQ assessment results
 * @param {Object} assessmentData - Assessment data including facilityInfo, ratings, scores, quadrant
 * @returns {Blob} PDF blob
 */
export function generateAssessmentPDF(assessmentData) {
  const { facilityInfo, ratings, scores, quadrant } = assessmentData;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = margin;

  // Brand colors - cyan/blue/purple theme
  const colors = {
    cyan: [6, 182, 212],      // #06b6d4
    blue: [59, 130, 246],     // #3b82f6
    purple: [168, 85, 247],   // #a855f7
    dark: [15, 23, 42],       // slate-900
    muted: [100, 116, 139],   // slate-500
    light: [241, 245, 249],   // slate-100
    white: [255, 255, 255],
  };

  // Helper to add text with wrapping
  const addText = (text, fontSize = 10, isBold = false, color = colors.dark) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    doc.text(text, margin, yPos);
    yPos += fontSize / 2 + 3;
  };

  // Helper to add centered text
  const addCenteredText = (text, fontSize = 10, isBold = false, color = colors.dark) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    doc.text(text, pageWidth / 2, yPos, { align: 'center' });
    yPos += fontSize / 2 + 3;
  };

  // Helper to add section spacing
  const addSpacing = (space = 5) => {
    yPos += space;
  };

  // Draw gradient-style header (using solid cyan with accent)
  doc.setFillColor(...colors.cyan);
  doc.rect(0, 0, pageWidth, 35, 'F');
  // Add subtle accent stripe
  doc.setFillColor(...colors.blue);
  doc.rect(0, 32, pageWidth, 3, 'F');

  // Header text
  doc.setTextColor(...colors.white);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('EXORAX IQ', margin, 18);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Data Center Readiness Assessment Report', margin, 27);

  // Date on right
  doc.setFontSize(9);
  doc.text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), pageWidth - margin, 18, { align: 'right' });

  yPos = 50;

  // Facility Information Section
  doc.setFillColor(...colors.light);
  doc.rect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 45, 'F');

  addText('FACILITY INFORMATION', 12, true, colors.cyan);
  addSpacing(2);
  addText(`${facilityInfo.name}`, 14, true, colors.dark);
  if (facilityInfo.location) {
    addText(`Location: ${facilityInfo.location}`, 10, false, colors.muted);
  }
  if (facilityInfo.targetMW) {
    addText(`Target Capacity: ${facilityInfo.targetMW}`, 10, false, colors.muted);
  }
  addSpacing(3);
  doc.setFontSize(9);
  doc.setTextColor(...colors.muted);
  doc.text(`Contact: ${facilityInfo.contactName} | ${facilityInfo.email}${facilityInfo.company ? ` | ${facilityInfo.company}` : ''}`, margin, yPos);
  yPos += 15;

  addSpacing(10);

  // EXORAX IQ Rating - Hero Section
  addText('YOUR EXORAX IQ RATING', 12, true, colors.cyan);
  addSpacing(5);

  // Score box with quadrant color
  const scoreBoxWidth = 90;
  const scoreBoxHeight = 45;
  const scoreBoxX = margin;
  const scoreBoxY = yPos;

  // Get quadrant color
  const getQuadrantColor = (label) => {
    switch(label) {
      case 'Prime Candidate': return colors.cyan;
      case 'High Potential': return colors.blue;
      case 'Optimize First': return [245, 158, 11]; // amber
      default: return colors.muted;
    }
  };

  const quadrantColor = getQuadrantColor(quadrant.label);

  doc.setFillColor(...quadrantColor);
  doc.roundedRect(scoreBoxX, scoreBoxY, scoreBoxWidth, scoreBoxHeight, 3, 3, 'F');

  doc.setTextColor(...colors.white);
  doc.setFontSize(36);
  doc.setFont('helvetica', 'bold');
  doc.text(Math.round(scores.overall).toString(), scoreBoxX + scoreBoxWidth / 2, scoreBoxY + 22, { align: 'center' });
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(quadrant.label.toUpperCase(), scoreBoxX + scoreBoxWidth / 2, scoreBoxY + 35, { align: 'center' });

  // Description next to score box
  const descX = scoreBoxX + scoreBoxWidth + 15;
  doc.setFontSize(10);
  doc.setTextColor(...colors.dark);
  doc.setFont('helvetica', 'normal');
  const splitDesc = doc.splitTextToSize(quadrant.description, pageWidth - descX - margin);
  doc.text(splitDesc, descX, scoreBoxY + 12);

  yPos = scoreBoxY + scoreBoxHeight + 15;

  // Recommended Action Box
  doc.setFillColor(...colors.light);
  doc.roundedRect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 25, 2, 2, 'F');
  doc.setFillColor(...colors.cyan);
  doc.rect(margin - 5, yPos - 5, 4, 25, 'F'); // Left accent bar

  doc.setFontSize(9);
  doc.setTextColor(...colors.muted);
  doc.setFont('helvetica', 'bold');
  doc.text('RECOMMENDED ACTION', margin + 5, yPos + 2);
  doc.setFontSize(11);
  doc.setTextColor(...colors.dark);
  doc.setFont('helvetica', 'normal');
  doc.text(quadrant.action, margin + 5, yPos + 12);

  yPos += 35;

  // Score Breakdown
  addText('PERFORMANCE METRICS', 12, true, colors.cyan);
  addSpacing(5);

  const drawScoreBar = (label, value, color) => {
    const barWidth = 100;
    const barHeight = 10;
    const labelWidth = 85;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.dark);
    doc.text(label, margin, yPos);

    // Background bar with rounded corners
    doc.setFillColor(229, 231, 235);
    doc.roundedRect(margin + labelWidth, yPos - 6, barWidth, barHeight, 2, 2, 'F');

    // Filled bar
    doc.setFillColor(...color);
    const fillWidth = Math.max(4, (value / 100) * barWidth);
    doc.roundedRect(margin + labelWidth, yPos - 6, fillWidth, barHeight, 2, 2, 'F');

    // Value text
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`${Math.round(value)}%`, margin + labelWidth + barWidth + 8, yPos);

    yPos += 15;
  };

  drawScoreBar('Infrastructure Readiness', scores.readiness, colors.cyan);
  drawScoreBar('Scalability Potential', scores.scalability, colors.blue);
  drawScoreBar('Operational Maturity', scores.operational, colors.purple);

  addSpacing(10);

  // Check if we need a new page
  if (yPos > pageHeight - 100) {
    doc.addPage();
    yPos = margin;
  }

  // Category Ratings
  addText('DETAILED CATEGORY BREAKDOWN', 12, true, colors.cyan);
  addSpacing(5);

  const categories = [
    { id: 'utility', name: 'Utility & Grid Infrastructure', weight: 20 },
    { id: 'network', name: 'Network & Connectivity', weight: 12 },
    { id: 'location', name: 'Site Location & Geography', weight: 10 },
    { id: 'regulatory', name: 'Regulatory & Compliance', weight: 8 },
    { id: 'building', name: 'Building Infrastructure', weight: 18 },
    { id: 'expansion', name: 'Expansion & Future Capacity', weight: 10 },
    { id: 'financial', name: 'Financial & Commercial', weight: 12 },
    { id: 'insurance', name: 'Insurance & Liability', weight: 5 },
    { id: 'operator', name: 'Owner/Operator Track Record', weight: 5 }
  ];

  const priorityLabels = ['Unknown', 'Poor', 'Fair', 'Good', 'Excellent'];

  categories.forEach((cat) => {
    if (yPos > pageHeight - 25) {
      doc.addPage();
      yPos = margin;
    }

    const rating = ratings[cat.id] || 0;
    const ratingLabel = priorityLabels[rating];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.dark);
    doc.text(`${cat.name}`, margin, yPos);

    // Weight badge
    doc.setFontSize(8);
    doc.setTextColor(...colors.muted);
    doc.text(`${cat.weight}%`, margin + 95, yPos);

    // Draw dots for rating
    const dotStartX = pageWidth - margin - 55;
    for (let i = 0; i < 4; i++) {
      if (i < rating) {
        doc.setFillColor(...colors.cyan);
      } else {
        doc.setFillColor(229, 231, 235);
      }
      doc.circle(dotStartX + i * 9, yPos - 2, 3, 'F');
    }

    // Rating label
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...(rating >= 3 ? colors.cyan : rating >= 2 ? colors.blue : colors.muted));
    doc.text(ratingLabel, pageWidth - margin, yPos, { align: 'right' });

    yPos += 12;
  });

  // New page for CTA
  doc.addPage();
  yPos = margin;

  // CTA Section - Strong call to action
  doc.setFillColor(...colors.cyan);
  doc.rect(0, 0, pageWidth, 60, 'F');
  doc.setFillColor(...colors.blue);
  doc.rect(0, 57, pageWidth, 3, 'F');

  doc.setTextColor(...colors.white);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('READY TO ACCELERATE YOUR AI INFRASTRUCTURE?', pageWidth / 2, 25, { align: 'center' });
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Partner with EXORAX to transform your facility into an AI-ready powerhouse.', pageWidth / 2, 40, { align: 'center' });

  yPos = 80;

  // Next Steps Section
  addText('YOUR NEXT STEPS', 14, true, colors.cyan);
  addSpacing(8);

  const nextSteps = [
    {
      num: '1',
      title: 'Schedule a Consultation',
      desc: 'Meet with our infrastructure experts to discuss your specific requirements and timeline.'
    },
    {
      num: '2',
      title: 'Detailed Site Assessment',
      desc: 'Our team will conduct an in-depth evaluation of your facility\'s potential for AI workloads.'
    },
    {
      num: '3',
      title: 'Custom Infrastructure Plan',
      desc: 'Receive a tailored roadmap for transforming your site into a high-performance AI data center.'
    },
    {
      num: '4',
      title: 'Deployment & Support',
      desc: 'Fast-track your deployment with our turnkey solutions and 24/7 enterprise support.'
    }
  ];

  nextSteps.forEach((step) => {
    // Step number circle
    doc.setFillColor(...colors.cyan);
    doc.circle(margin + 8, yPos + 2, 8, 'F');
    doc.setTextColor(...colors.white);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(step.num, margin + 8, yPos + 5, { align: 'center' });

    // Step content
    doc.setTextColor(...colors.dark);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(step.title, margin + 25, yPos);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.muted);
    doc.text(step.desc, margin + 25, yPos + 10, { maxWidth: pageWidth - margin - 45 });

    yPos += 30;
  });

  addSpacing(15);

  // Why EXORAX Section
  doc.setFillColor(...colors.light);
  doc.roundedRect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 55, 3, 3, 'F');

  addText('WHY EXORAX?', 12, true, colors.cyan);
  addSpacing(3);

  const benefits = [
    '150MW+ current capacity with 500MW planned by 2026',
    '100kW per rack density with advanced liquid cooling',
    '1.1-1.3 PUE rating for maximum efficiency',
    '99.999% uptime SLA with enterprise support',
    'Flexible deployment: Colocation, GPUaaS, or Full-Stack AI Solutions'
  ];

  benefits.forEach((benefit) => {
    doc.setFillColor(...colors.cyan);
    doc.circle(margin + 3, yPos - 2, 2, 'F');
    doc.setFontSize(10);
    doc.setTextColor(...colors.dark);
    doc.setFont('helvetica', 'normal');
    doc.text(benefit, margin + 10, yPos);
    yPos += 9;
  });

  yPos += 15;

  // Contact CTA Box
  doc.setFillColor(...colors.cyan);
  doc.roundedRect(margin - 5, yPos - 5, pageWidth - 2 * margin + 10, 40, 3, 3, 'F');

  doc.setTextColor(...colors.white);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('GET STARTED TODAY', pageWidth / 2, yPos + 8, { align: 'center' });

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Contact our team to discuss your infrastructure needs', pageWidth / 2, yPos + 18, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('info@exorax.com  |  www.exorax.com', pageWidth / 2, yPos + 30, { align: 'center' });

  // Footer
  const footerY = pageHeight - 10;
  doc.setFontSize(8);
  doc.setTextColor(...colors.muted);
  doc.text('CONFIDENTIAL - Generated by EXORAX IQ Assessment Tool', margin, footerY);
  doc.text(`Report ID: EXO-${Date.now().toString(36).toUpperCase()}`, pageWidth - margin, footerY, { align: 'right' });

  return doc.output('blob');
}
