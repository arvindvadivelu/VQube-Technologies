import json
import sys
import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_pdf(json_path, output_path):
    if not os.path.exists(json_path):
        print(f"Error: Could not find {json_path}")
        sys.exit(1)

    with open(json_path, 'r') as f:
        data = json.load(f)

    doc = SimpleDocTemplate(output_path, pagesize=letter)
    styles = getSampleStyleSheet()
    elements = []

    # Custom styles
    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1B2A4A'),
        spaceAfter=20
    )
    
    heading_style = ParagraphStyle(
        'HeadingStyle',
        parent=styles['Heading2'],
        fontSize=16,
        textColor=colors.HexColor('#1B2A4A'),
        spaceAfter=12
    )

    # 1. Cover Page
    elements.append(Paragraph(f"Marketing Audit Report: {data.get('brand_name', 'Brand')}", title_style))
    elements.append(Paragraph(f"<b>URL:</b> {data.get('url', 'N/A')}", styles['Normal']))
    elements.append(Paragraph(f"<b>Date:</b> {data.get('date', 'N/A')}", styles['Normal']))
    elements.append(Spacer(1, 0.2*inch))
    
    score = data.get('overall_score', 0)
    score_color = '#00C853' if score >= 80 else '#2D5BFF' if score >= 60 else '#FFB300' if score >= 40 else '#FF1744'
    elements.append(Paragraph(f"<b>Overall Score:</b> <font color='{score_color}'>{score}/100</font>", heading_style))
    elements.append(Spacer(1, 0.2*inch))
    
    elements.append(Paragraph("<b>Executive Summary:</b>", styles['Heading3']))
    elements.append(Paragraph(data.get('executive_summary', ''), styles['Normal']))
    elements.append(Spacer(1, 0.5*inch))

    # 2. Score Breakdown
    elements.append(Paragraph("Category Scores", heading_style))
    score_data = [["Category", "Score", "Weight"]]
    
    categories = data.get('categories', {})
    for cat, details in categories.items():
        score_data.append([cat, f"{details.get('score', 0)}/100", details.get('weight', '')])
        
    t = Table(score_data, colWidths=[3*inch, 1.5*inch, 1.5*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1B2A4A')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0,0), (-1,0), 12),
        ('BACKGROUND', (0,1), (-1,-1), colors.HexColor('#F5F7FA')),
        ('GRID', (0,0), (-1,-1), 1, colors.HexColor('#E0E6ED'))
    ]))
    elements.append(t)
    elements.append(Spacer(1, 0.5*inch))

    # 3. Key Findings
    elements.append(Paragraph("Key Findings", heading_style))
    findings = data.get('findings', [])
    findings_data = [["Severity", "Finding"]]
    for f in findings:
        findings_data.append([f.get('severity', ''), f.get('finding', '')])
        
    t2 = Table(findings_data, colWidths=[1.5*inch, 4.5*inch])
    t2.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1B2A4A')),
        ('TEXTCOLOR', (0,0), (-1,0), colors.whitesmoke),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('GRID', (0,0), (-1,-1), 1, colors.HexColor('#E0E6ED'))
    ]))
    elements.append(t2)
    elements.append(Spacer(1, 0.5*inch))

    # 4. Action Plan
    elements.append(Paragraph("Prioritized Action Plan", heading_style))
    
    def add_list(title, items):
        if items:
            elements.append(Paragraph(f"<b>{title}</b>", styles['Heading3']))
            for item in items:
                elements.append(Paragraph(f"• {item}", styles['Normal']))
            elements.append(Spacer(1, 0.2*inch))

    add_list("Quick Wins (This Week)", data.get('quick_wins', []))
    add_list("Medium-Term (1-3 Months)", data.get('medium_term', []))
    add_list("Strategic (3-6 Months)", data.get('strategic', []))

    doc.build(elements)
    print(f"Report successfully generated at: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python generate_pdf_report.py <input.json> <output.pdf>")
        sys.exit(1)
    
    create_pdf(sys.argv[1], sys.argv[2])
