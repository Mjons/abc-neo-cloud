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

  // Helper to add text with wrapping
  const addText = (text, fontSize = 10, isBold = false, color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    doc.text(text, margin, yPos);
    yPos += fontSize / 2 + 3;
  };

  // Helper to add section spacing
  const addSpacing = (space = 5) => {
    yPos += space;
  };

  // Header with EXORAX branding
  doc.setFillColor(16, 185, 129); // emerald-500
  doc.rect(0, 0, pageWidth, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('EXORAX IQ', margin, 18);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Data Center Readiness Assessment Report', margin, 25);

  yPos = 45;

  // Facility Information
  addText('FACILITY INFORMATION', 14, true);
  addSpacing(2);
  addText(`Facility Name: ${facilityInfo.name}`, 11, true);
  if (facilityInfo.location) {
    addText(`Location: ${facilityInfo.location}`, 10);
  }
  if (facilityInfo.targetMW) {
    addText(`Target Capacity: ${facilityInfo.targetMW}`, 10);
  }
  addSpacing(3);
  addText(`Contact: ${facilityInfo.contactName}`, 10);
  addText(`Email: ${facilityInfo.email}`, 10);
  if (facilityInfo.company) {
    addText(`Company: ${facilityInfo.company}`, 10);
  }

  addSpacing(10);

  // Overall Rating
  addText('EXORAX IQ RATING', 14, true);
  addSpacing(2);

  // Draw overall score box
  const scoreBoxWidth = 80;
  const scoreBoxHeight = 35;
  const scoreBoxX = margin;
  const scoreBoxY = yPos;

  // Get quadrant color
  const getQuadrantColor = (label) => {
    switch(label) {
      case 'Prime Candidate': return [16, 185, 129]; // emerald
      case 'High Potential': return [59, 130, 246]; // blue
      case 'Optimize First': return [245, 158, 11]; // amber
      default: return [107, 114, 128]; // gray
    }
  };

  const quadrantColor = getQuadrantColor(quadrant.label);

  doc.setFillColor(...quadrantColor);
  doc.rect(scoreBoxX, scoreBoxY, scoreBoxWidth, scoreBoxHeight, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text(Math.round(scores.overall).toString(), scoreBoxX + scoreBoxWidth / 2, scoreBoxY + 18, { align: 'center' });
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(quadrant.label, scoreBoxX + scoreBoxWidth / 2, scoreBoxY + 28, { align: 'center' });

  yPos = scoreBoxY + scoreBoxHeight + 8;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(quadrant.description, margin, yPos, { maxWidth: pageWidth - 2 * margin });
  yPos += 15;

  addSpacing(5);

  // Recommended Action
  addText('RECOMMENDED ACTION', 12, true);
  addSpacing(2);
  addText(quadrant.action, 10);

  addSpacing(10);

  // Score Breakdown
  addText('SCORE BREAKDOWN', 14, true);
  addSpacing(5);

  const drawScoreBar = (label, value, color) => {
    const barWidth = 100;
    const barHeight = 8;
    const labelWidth = 90;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(label, margin, yPos);

    // Background bar
    doc.setFillColor(229, 231, 235); // gray-200
    doc.rect(margin + labelWidth, yPos - 5, barWidth, barHeight, 'F');

    // Filled bar
    doc.setFillColor(...color);
    doc.rect(margin + labelWidth, yPos - 5, (value / 100) * barWidth, barHeight, 'F');

    // Value text
    doc.text(Math.round(value).toString(), margin + labelWidth + barWidth + 5, yPos);

    yPos += 12;
  };

  drawScoreBar('Infrastructure Readiness', scores.readiness, [16, 185, 129]);
  drawScoreBar('Scalability Potential', scores.scalability, [59, 130, 246]);
  drawScoreBar('Operational Maturity', scores.operational, [245, 158, 11]);

  addSpacing(10);

  // Check if we need a new page
  if (yPos > pageHeight - 80) {
    doc.addPage();
    yPos = margin;
  }

  // Category Ratings
  addText('CATEGORY RATINGS', 14, true);
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

  categories.forEach((cat, index) => {
    // Check if we need a new page
    if (yPos > pageHeight - 20) {
      doc.addPage();
      yPos = margin;
    }

    const rating = ratings[cat.id] || 0;
    const ratingLabel = priorityLabels[rating];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(`${cat.name} (${cat.weight}%)`, margin, yPos);

    // Draw dots for rating
    const dotStartX = pageWidth - margin - 60;
    for (let i = 0; i < 4; i++) {
      if (i < rating) {
        doc.setFillColor(16, 185, 129); // filled
      } else {
        doc.setFillColor(229, 231, 235); // empty
      }
      doc.circle(dotStartX + i * 8, yPos - 2, 2, 'F');
    }

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(ratingLabel, pageWidth - margin - 30, yPos, { align: 'right' });

    yPos += 10;
  });

  // Footer
  const footerY = pageHeight - 15;
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Generated by EXORAX IQ Assessment Tool', margin, footerY);
  doc.text(new Date().toLocaleDateString(), pageWidth - margin, footerY, { align: 'right' });

  return doc.output('blob');
}
