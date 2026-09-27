# Product Requirements Document (PRD)
## VQube Industrial Engineering Platform & Global Client Delivery Ecosystem

---

**Document Control & Governance**
- **Document ID:** `PRD-VQT-2026-V2.4`
- **Current Version:** `v2.4 (Approved Baseline)`
- **Effective Date:** October 2026
- **Lead Author:** Senior Technical Project & Product Manager
- **Executive Sponsor:** Vadivelu Dhamodharan (Head — Engineering & Business Solutions)
- **Organization:** VQube Technologies [VQT], Chennai Headquarters, Tamil Nadu, India
- **Classification:** Strictly Confidential — Enterprise Internal & Partner Baseline
- **Governing Codes:** ASME BPVC Section VIII, ASME B31.1/B31.3, API 650/620, ASTM, DIN, ISO 9001
- **Digital Infrastructure:** Native Semantic HTML5/CSS3/ES6+, Offline PWA (`sw.js`), `/llms.txt` Standard

---

## Executive Summary

**VQube Technologies [VQT]** is an international industrial engineering consulting and technical workforce solutions firm headquartered in Chennai, Tamil Nadu, India. Operating on the core corporate philosophy of *"Vector • Vision • Value"*, VQube bridges the gap between capital expenditure concepts and operating industrial assets across the **Cement**, **Mining & Minerals**, **Oil & Gas (Upstream/Downstream)**, **Power & Energy**, and **Heavy Manufacturing** sectors.

This PRD establishes the engineering requirements, functional specifications, operational quality gates, commercial delivery models, and digital web infrastructure for VQube Technologies.

### Key Performance & Delivery Highlights
| Metric | Baseline / Target | Operational Scope |
| :---: | :---: | :--- |
| **50+** | Global Capital Projects Delivered | Greenfield & Brownfield plant design, platework, and structural verification |
| **15+** | Tier-1 EPC & Industrial Clients | Serving multinational plant owners, EPC contractors, and equipment OEMs |
| **100%** | Code-Compliant Engineering | Zero-defect compliance with ASME, ASTM, DIN, ISO, and API standards |
| **5–14d** | Manpower Mobilization SLA | Rapid deployment of pre-screened technical talent across 11 disciplines |
| **Sub-50ms** | Digital Interface Latency | Service Worker dual-cache strategy (`sw.js`) with offline resilience |

---

## 1. Document Revision History & Sign-Off

### 1.1 Revision History
| Revision | Date | Author / Role | Description of Changes | Status |
| :---: | :---: | :--- | :--- | :---: |
| **v1.0** | 15 Jan 2025 | Senior PM & Systems Eng | Initial baseline establishing Cement & Mining Plant Engineering and platework deliverables. | Archived |
| **v1.5** | 10 Jun 2025 | Senior Technical PM | Added Oil & Gas piping, ASME Section VIII pressure vessels, API 650/620 storage tanks, and CAESAR II stress analysis. | Archived |
| **v2.0** | 05 Jan 2026 | Senior Product Manager | Introduced 11-Discipline Engineering Manpower Deputation, GDC offshore delivery center, and SLA benchmarks (5–14 days). | Archived |
| **v2.2** | 14 May 2026 | Lead Digital Architect | Integrated PWA Service Worker caching architecture (Cache-First + Stale-While-Revalidate) for sub-50ms repeat loads. | Superseded |
| **v2.4** | 27 Sep 2026 | Senior Project & Product Mgr | Enterprise Baselined PRD: Machine-Readable AI endpoints (`/llms.txt`), Schema.org JSON-LD graph, and Milestone Stage-Gate controls. | **Baselined** |

### 1.2 Multi-Disciplinary Stakeholder Sign-Off
- **Project & Product Lead:** Senior Technical Project Manager — *[Approved - Digital PMO]*
- **Head of Engineering & Business Solutions:** Vadivelu Dhamodharan — *[Authorized - Executive Board]*
- **Quality Assurance & Code Inspection:** Lead QA/QC & Welding Inspector — *[Verified - ISO/ASME QA]*
- **Commercial & Contracts Operations:** Head of Commercial & Contracts — *[Approved - Contracts]*

---

## 2. Market Problem Statement & Value Proposition

### 2.1 Heavy Industry Friction
1. **Costly Fabrication & Erection Errors:** Complex process ducting and high-temperature piping systems frequently fail during commissioning due to unmodeled aerodynamic turbulence, thermal expansion binding, and structural vibration harmonics.
2. **Specialized Technical Talent Scarcity:** Plant operators and EPC contractors struggle to rapidly source qualified, code-compliant engineers across specialized disciplines (Piping Stress, CFD, Tekla Steel, QA/QC).
3. **Fragmented Project Lifecycles:** Disconnects between conceptual design (FEED), detailed 3D modeling, numerical simulation, and site construction cause scope drift, clash errors, and budget overruns.
4. **Digital & Procurement Inefficiencies:** Opaque technical capabilities and lack of machine-readable specifications delay RFP evaluations by engineering procurement teams and automated sourcing agents.

### 2.2 The VQube Solution
- **Pre-Fabrication Multi-Physics Verification:** Full numerical simulation using ANSYS Fluent (CFD), ANSYS Mechanical (FEA), and CAESAR II to validate aerodynamics, thermal fatigue, and code stress compliance prior to steel cutting.
- **Rapid 11-Discipline Manpower Deputation:** Vetted engineering professionals mobilized within 5 to 14 business days across onsite plant assignments or the Chennai Global Delivery Center (GDC).
- **Milestone Stage-Gate Quality Governance:** Standardized 30% (BOD), 60% (FEED), 90% (Detailed), and 100% (IFC) review gates guaranteeing 100% statutory code adherence.
- **Ultra-Fast, AI-Ready Digital Interface:** Zero-dependency web platform featuring sub-50ms repeat load PWA caching, structured Schema.org microdata, and compliant `/llms.txt` endpoints.

---

## 3. Product Vision, Goals & Success Metrics (OKRs & KPIs)

### 3.1 Strategic North Star
> *"Zero-Defect Engineering Delivery Rate (ZDER) • Rapid Mobilization SLA (≤ 10 Days) • Sub-50ms Client Interface Latency."*

### 3.2 OKR Framework
- **Objective 1: Expand Global Industrial Engineering Dominance**
  - KR 1.1: Deliver 30+ major EPC project packages with 0% code non-compliance.
  - KR 1.2: Expand enterprise client footprint across GCC, Southeast Asia, Europe, and Americas.
  - KR 1.3: Achieve ≥ 90% repeat business and client retention rate.
- **Objective 2: Scale Engineering Manpower Deputation**
  - KR 2.1: Maintain a live pool of 250+ certified engineers across 11 technical disciplines.
  - KR 2.2: Mobilize talent to client sites or offshore GDC within 5–10 business days.
  - KR 2.3: Maintain ≥ 98% client satisfaction score across deployed engineering teams.
- **Objective 3: Lead Heavy Industry in Digital Performance & AI Accessibility**
  - KR 3.1: Maintain 100/100 Core Web Vitals and sub-50ms repeat page loads.
  - KR 3.2: Provide 100% compliant `/llms.txt` endpoints for automated enterprise procurement agents.

---

## 4. User Personas & Enterprise Stakeholder Journeys

### 4.1 Key Personas
1. **Rajesh Menon — Global EPC Project Director (Mega Capital Projects)**
   - *Needs:* Fixed-scope turnkey EPCM packages, complete plant GA drawings, clash-free 3D models, and ASME/DIN code-compliant fabrication drawings.
   - *Pain Points:* Schedule slippage, steel tonnage overruns, site clash rework.
2. **Dr. Hans-Ulrich Becker — Plant Operations & Technical Director (Cement & Minerals)**
   - *Needs:* Root-cause diagnostics for kiln refractory thermal cracking, preheater cyclone pressure drop, and transfer chute wear.
   - *Pain Points:* Unplanned kiln shutdowns costing $150k/day; excessive aerodynamic pressure losses.
3. **Sarah Jenkins — Global Resource Mobilization Lead (Tier-1 EPC Contractor)**
   - *Needs:* Rapid onboarding of certified piping stress engineers, Tekla steel modelers, and QA/QC inspectors.
   - *Pain Points:* 60-day agency recruitment delays; unqualified candidates failing technical screens.
4. **Autonomous AI Procurement Agent / Enterprise LLM Evaluator**
   - *Needs:* Deterministic, structured markdown specifications, capability matrices, and commercial engagement models without heavy client-side JavaScript execution.

### 4.2 End-to-End Enterprise Stakeholder Journey
```
Discovery & Evaluation ──► Technical Scope Intake ──► Commercial Gate & NDA ──► Stage-Gate Engineering ──► Final IFC Handover
(Portal / llms.txt)       (Form / WhatsApp API)      (Model A/B/C/D)          (30% / 60% / 90% Gates)   (100% IP Transfer)
```

---

## 5. System Architecture & Dual-Pillar Product Scope

### 5.1 Dual-Pillar Ecosystem
- **Pillar I: Industrial Engineering Consulting & Simulation Suite**
  - Domain Delivery: Cement Plant Engineering, Mining & Minerals Beneficiation, Oil & Gas Upstream/Downstream, Heavy Platework.
  - Advanced Simulation: ANSYS Fluent (CFD), ANSYS Mechanical (FEA), CAESAR II Pipe Stress.
  - Manpower Deputation: 11 Technical Specialisms (Onsite Worldwide, Chennai Offshore GDC, Hybrid).
- **Pillar II: High-Performance Digital Web Platform & Machine Intelligence**
  - Frontend Web Core: Native Semantic HTML5, Modular CSS3 Custom Properties, ES6+ JavaScript.
  - PWA Service Worker (`sw.js`): Cache-First for static assets, Stale-While-Revalidate for HTML.
  - Machine Intelligence Endpoints: `/llms.txt`, `/llms-full.txt`, Schema.org JSON-LD graph.
  - Commercial Lead Engine: Modal consultation form, direct WhatsApp advisory bridge (+91 76048 52835).

### 5.2 Computational Toolchain & Governing Standards Matrix
| Discipline | Software Stack | Governing Codes | Primary Deliverables |
| :--- | :--- | :--- | :--- |
| **CFD Simulation** | ANSYS Fluent | ASME PTC 4.4, EPA, ISO 14001 | Combustion aerodynamics, cyclone separation, cooler aeration, pressure drop minimization |
| **FEA Verification** | ANSYS Mechanical | ASME Section VIII Div 1/2, Eurocode 3 | Static structural, modal vibration, thermal fatigue, buckling stability |
| **Piping Stress** | CAESAR II | ASME B31.1, ASME B31.3, API 610 | Thermal expansion, nozzle loads, spring hanger schedules, stress isometrics |
| **Plant & 3D Piping** | AVEVA E3D, Plant 3D | PIP, ISO 10628, OSHA 1910 | Multi-discipline 3D models, clash resolution, GA drawings, BOMs |
| **Structural Steel** | Tekla Structures, AutoCAD | AISC 360, ASTM A36/A572, AWS D1.1 | General arrangement drawings, steel fabrication drawings, heavy platework detailing |

---

## 6. Functional Requirements (FR)

### FR-1: Industrial Domain Engineering Engines
- **FR-1.1 (Cement Engineering):** Complete pyroprocessing engineering (rotary kiln GAs, calciner burners, cyclone preheaters), process gas ductwork, baghouses, and grinding circuit layouts.
- **FR-1.2 (Mining & Minerals):** Crushing and screening plant layouts, beneficiation circuits, bulk transfer chutes engineered via Discrete Element Modeling (DEM), and slurry transport hydraulics.
- **FR-1.3 (Oil & Gas Upstream/Downstream):** FEED packages, 3D piping routing in AVEVA E3D / Plant 3D, ASME Section VIII pressure vessels, and API 650/620 atmospheric storage tanks.
- **FR-1.4 (Multi-Discipline 3D Coordination):** Automated clash resolution across piping, steel, electrical, and HVAC packages prior to steel procurement.

### FR-2: Numerical Simulation & High-Fidelity Multi-Physics Suite
- **FR-2.1 (CFD Aerodynamics):** ANSYS Fluent modeling of reacting combustion flows, preheater pressure-drop reduction (≥ 15% fan savings target), and dust collection dispersion within 7–14 business days.
- **FR-2.2 (FEA Durability):** ANSYS Mechanical static/dynamic structural analysis, vibrating equipment foundation resonance checks, and thermal fatigue life prediction.
- **FR-2.3 (Piping Flexibility):** CAESAR II compliance with ASME B31.1/B31.3, rotating equipment nozzle load qualification (API 610/617), and spring hanger datasheets.

### FR-3: Skilled Engineering Manpower Deputation & Recruitment
- **FR-3.1 (11 Engineering Disciplines):** Mechanical, Civil/Structural, Process, Piping, Electrical, Instrumentation & Control (I&C), Planning (Primavera P6), Procurement, QA/QC, HSE, and Senior CAD/Tekla Drafters.
- **FR-3.2 (Deployment Modalities):** Onsite client plant deputation worldwide, Chennai Global Delivery Center (GDC) offshore dedicated teams, and hybrid resource augmentation.
- **FR-3.3 (Mobilization SLA):** Pre-screened candidate delivery within 48–72 hours; plant mobilization completed within **5 to 14 business days**.

### FR-4: Digital Corporate Platform & Client Interface
- **FR-4.1 (Zero-Framework Core):** Native Semantic HTML5, CSS3 Custom Properties, and ES6+ JavaScript with sub-second TTFB and zero Cumulative Layout Shift (CLS = 0).
- **FR-4.2 (PWA Service Worker):** `sw.js` implementing Cache-First static asset precaching and Stale-While-Revalidate HTML delivery for instant sub-50ms repeat loads and full offline capability.
- **FR-4.3 (Lead Capture & Advisory):** Interactive consultation modal with real-time field validation, sector tagging, and a direct fallback bridge to WhatsApp (+91 76048 52835).

### FR-5: Machine Intelligence & Autonomous Discovery
- **FR-5.1 (`/llms.txt` Standard):** Compliant `/llms.txt` and `/llms-full.txt` endpoints providing structured markdown specifications for AI assistants and autonomous procurement bots.
- **FR-5.2 (Schema.org Knowledge Graph):** Embedded JSON-LD microdata for `Organization`, `WebSite`, `FAQPage`, and `Person` enabling rich snippets and Google Knowledge Graph indexing.

### FR-6: Governance, Security & Intellectual Property
- **FR-6.1 (NDA & Confidentiality):** Mutual NDA executed prior to proprietary drawing exchange; strict client data isolation under ISO 27001 principles.
- **FR-6.2 (IP Transfer):** 100% ownership of generated 3D models, CAD drawings, and calculation sheets transferred to client upon final milestone payment.
- **FR-6.3 (Revision Control):** Two comprehensive rounds of client review comments included prior to Gate 4 IFC issue; subsequent modifications governed by formal Engineering Change Orders (ECO).

---

## 7. Non-Functional Requirements (NFR)

- **NFR-1 (Performance & Latency):** Digital LCP ≤ 1.2s; FID/INP ≤ 50ms; PWA cache repeat load ≤ 50ms; Simulation turnaround SLA 7–21 business days.
- **NFR-2 (Reliability & Resilience):** 99.95% web uptime on global edge CDN; offline precached rendering; daily encrypted CAD repository backups.
- **NFR-3 (Security & Confidentiality):** HTTPS/TLS 1.3 enforced; role-based access control (RBAC); zero exposure of client CAD models.
- **NFR-4 (Accessibility & Usability):** WCAG 2.1 Level AA compliance; fluid responsiveness across 320px mobile to 4K ultra-wide displays.
- **NFR-5 (Engineering Standards):** Strict adherence to ASME BPVC Section VIII, ASME B31.1/B31.3, API 650/620, DIN, ASTM, and ISO 9001.

---

## 8. Commercial Engagement Models & Milestone Stage-Gates

### 8.1 Commercial Models Matrix
| Model | Commercial Structure | Deployment Scope | Invoicing & Payment Terms |
| :--- | :--- | :--- | :--- |
| **Model A: Manpower Deputation** | Time & Material / Monthly Retainer | Onsite plant or Chennai Offshore GDC across 11 disciplines | Short-term (1–6 mo) or Long-term (6–24+ mo). Monthly verified timesheets. |
| **Model B: Fixed-Scope Turnkey EPCM** | Milestone-Based Fixed Price | GA drawings, FEED, detailed platework drawings, BOMs | Stage-Gates: 30% Advance, 30% at Gate 2, 30% at Gate 3, 10% upon Gate 4 IFC. |
| **Model C: Numerical Simulation** | Per-Study Lump Sum / MSA | ANSYS Fluent CFD, FEA, CAESAR II stress analysis | 7–21 days SLA. Invoiced 50% on geometry freeze, 50% on final report delivery. |
| **Model D: Technical Recruitment** | Permanent Placement Fee | Specialized executive search for plant heads & lead engineers | Success fee on candidate start date with 90-day replacement guarantee. |

### 8.2 The 4-Stage Milestone Gateway
```
Gate 1: 30% Concept (BOD) ──► Gate 2: 60% FEED Freeze ──► Gate 3: 90% Detailed & FEA ──► Gate 4: 100% IFC Release
```

---

## 9. Implementation Roadmap & RACI Matrix

### 9.1 Multi-Phase Execution Plan
- **Phase 1: Baseline Foundation (Q1–Q3 2025):** Cement/Mining engineering launch, 11-discipline manpower deputation rollout, web platform baseline. *(COMPLETED)*
- **Phase 2: Platform Core & Simulation (Q4 2025–Q2 2026):** PWA Service Worker caching, ANSYS Fluent/FEA standardization, Schema.org & `/llms.txt` integration. *(COMPLETED)*
- **Phase 3: Interactive Client Portal (Q3–Q4 2026):** Interactive client RFQ configurator, Stage-Gate deliverable tracking hub, automated CAESAR II report exporter. *(IN PROGRESS)*
- **Phase 4: AI Engineering Estimator (Q1–Q2 2027):** AI-assisted steel weight estimation and automated preliminary duct pressure-drop calculations. *(PLANNED)*

### 9.2 RACI Governance
- Scope & Commercial Proposals: Executive Sponsor (**A**), Senior PM (**R**), Lead Eng (**C**), QA/QC (**I**).
- Plant Layout & GA Packages: Senior PM (**A**), Lead Eng (**R**), CFD/FEA (**C**), QA/QC (**C**).
- Numerical Simulation (CFD/FEA): Lead Eng (**A**), CFD/FEA Specialist (**R**), Senior PM (**C**).
- Manpower Deputation: Executive Sponsor (**A**), Senior PM (**R**), Lead Eng (**R**), QA/QC (**C**).
- Stage 4 IFC Quality Sign-off: QA/QC Lead (**A**), Lead Eng (**R**), Senior PM (**C**).
- Digital Web Platform & AI Endpoints: Senior PM (**A**), Lead Digital Developer (**R**).

---

## 10. Risk Management & Quality Verification

### 10.1 Key Risks & Contingency Actions
- **RSK-01 (Simulation Mesh Divergence):** Standardize Grid Convergence Index (GCI); deploy cloud HPC nodes.
- **RSK-02 (Deputation Visa/Travel Lags):** Maintain pre-cleared roster of mobile engineers; initiate Chennai Offshore GDC immediately on LOI.
- **RSK-03 (Late Client Scope Creep):** Strict enforcement of Gate 2 FEED freeze; formal Engineering Change Orders (ECO) for post-freeze adjustments.
- **RSK-04 (Code Non-Conformance in Field):** 100% dual-engineer checking protocol; 24/7 technical advisory desk for fast field resolution.
- **RSK-05 (PWA Browser Cache Staling):** Versioned cache keys (`vqube-perf-v3`) with automated cache clearing on service worker activation.

### 10.2 Quality Audit & Sign-Off Authorization
- **Boiler & Pressure Vessel Compliance:** 100% ASME Section VIII Div 1/2 Verified.
- **Process Piping Stress Compliance:** 100% ASME B31.3 / B31.1 Verified via CAESAR II.
- **CFD Numerical Stability:** Mass and momentum balance residuals < 0.1% Verified.
- **Web Core Vitals:** 100/100 Lighthouse Performance, Sub-50ms repeat load Verified.

---

*Approved and Baselined by VQube Technologies Executive Leadership & Digital PMO.*  
*Document Reference: PRD-VQT-2026-V2.4 | All Rights Reserved © 2026 VQube Technologies.*
