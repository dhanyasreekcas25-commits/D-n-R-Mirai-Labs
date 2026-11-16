export type SchoolId =
  | 'all'
  | 'engineering'
  | 'computing'
  | 'management'
  | 'sciences';

export type DegreeLevel = 'All' | 'UG' | 'PG' | 'Ph.D.';

export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  degree: string;
  level: Exclude<DegreeLevel, 'All'>;
  school: Exclude<SchoolId, 'all'>;
  schoolLabel: string;
  duration: string;
  intake: number;
  accreditation: string;
  summary: string;
  eligibility: string;
  highlights: string[];
  careers: string[];
}

export interface ResearchCenter {
  id: string;
  index: string;
  title: string;
  department: string;
  leadInvestigator: string;
  grantsValue: string;
  patentsFiled: number;
  publications: number;
  description: string;
  focusAreas: string[];
  image?: string;
}

export interface CampusFacility {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  image: string;
  caption: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
}

export interface RecruiterPartner {
  name: string;
  sector: 'Core Engineering' | 'Software & Cloud' | 'Consulting & Finance';
  rolesOffered: string;
  hires2025: number;
}

export interface AlumniOutcome {
  name: string;
  batch: string;
  program: string;
  role: string;
  company: string;
  quote: string;
}

export const COLLEGE_IMAGES = {
  heroCampus: '/src/assets/images/hero_campus_quadrangle_1794810278215.jpg',
  roboticsLab: '/src/assets/images/research_robotics_lab_1794810278190.jpg',
  centralLibrary: '/src/assets/images/central_library_hall_1794810278411.jpg',
  auditorium: '/src/assets/images/campus_innovation_auditorium_1794810278769.jpg',
  sportsGround: '/src/assets/images/campus_football_ground_1794812191415.jpg',
} as const;

export const INSTITUTIONAL_METRICS = [
  { value: '1980', label: 'Founded in Coimbatore' },
  { value: 'NAAC A++', label: 'UGC Autonomous Status' },
  { value: '96.4%', label: '2025 Placement Rate' },
  { value: '112 Acres', label: 'Kuniyamuthur Campus' },
] as const;

export const SCHOOL_FILTERS: Array<{ id: SchoolId; label: string }> = [
  { id: 'all', label: 'All Schools' },
  { id: 'engineering', label: 'Engineering & Technology' },
  { id: 'computing', label: 'Computing & Data' },
  { id: 'management', label: 'Commerce & Management' },
  { id: 'sciences', label: 'Sciences & Humanities' },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'be-cse',
    code: 'SKC-ENG-101',
    title: 'Computer Science and Engineering',
    degree: 'B.E.',
    level: 'UG',
    school: 'computing',
    schoolLabel: 'Computing & Data',
    duration: '4 Years',
    intake: 240,
    accreditation: 'NBA Accredited',
    summary:
      'Foundations in systems architecture, distributed cloud engineering, compiler design, and applied machine intelligence.',
    eligibility: '10+2 with Physics, Chemistry, and Mathematics (TNEA / Merit Counseling).',
    highlights: [
      'Operating Systems, Compilers & Distributed Systems',
      'Full-Stack Cloud Architecture & DevSecOps',
      'Applied Machine Learning & Neural Systems',
      'Mandatory 6-Month Industry Capstone Residency',
    ],
    careers: ['Systems Engineer', 'Cloud Architect', 'ML Engineer', 'Backend Specialist'],
  },
  {
    id: 'btech-aids',
    code: 'SKC-CMP-104',
    title: 'Artificial Intelligence and Data Science',
    degree: 'B.Tech.',
    level: 'UG',
    school: 'computing',
    schoolLabel: 'Computing & Data',
    duration: '4 Years',
    intake: 180,
    accreditation: 'AICTE Approved',
    summary:
      'Statistical modeling, deep representation learning, large-scale data pipelines, and ethical autonomous decision systems.',
    eligibility: '10+2 with Mathematics, Physics, and Chemistry with minimum 50% aggregate.',
    highlights: [
      'Probability, Linear Algebra & Statistical Inference',
      'Computer Vision & Natural Language Processing',
      'Big Data Engineering & Streaming Pipelines',
      'Responsible AI Governance & Model Auditing',
    ],
    careers: ['Data Scientist', 'AI Research Engineer', 'Quantitative Analyst', 'MLOps Lead'],
  },
  {
    id: 'be-ece',
    code: 'SKC-ENG-102',
    title: 'Electronics and Communication Engineering',
    degree: 'B.E.',
    level: 'UG',
    school: 'engineering',
    schoolLabel: 'Engineering & Technology',
    duration: '4 Years',
    intake: 180,
    accreditation: 'NBA Accredited',
    summary:
      'VLSI silicon design, embedded firmware, 5G RF communication systems, and industrial IoT instrumentation.',
    eligibility: '10+2 with Physics, Chemistry, and Mathematics via TNEA or Institutional Quota.',
    highlights: [
      'Analog & Digital CMOS VLSI Design',
      'Embedded RTOS & ARM Microcontroller Systems',
      'Optical, Satellite & 5G Wireless Networks',
      'Signal Processing & Edge Sensor Hardware',
    ],
    careers: ['VLSI Design Engineer', 'Embedded Systems Architect', 'RF Engineer', 'Hardware Verification'],
  },
  {
    id: 'be-mech',
    code: 'SKC-ENG-103',
    title: 'Mechanical and Mechatronics Engineering',
    degree: 'B.E.',
    level: 'UG',
    school: 'engineering',
    schoolLabel: 'Engineering & Technology',
    duration: '4 Years',
    intake: 120,
    accreditation: 'NBA Accredited',
    summary:
      'Precision manufacturing, robotics kinematics, thermal propulsion, and Industry 4.0 smart factory automation.',
    eligibility: '10+2 Science stream with Mathematics and Physics; Diploma lateral entry open.',
    highlights: [
      'CAD/CAM, Finite Element Analysis & Additive Mfg',
      'Industrial Robotics & PLC Automation Systems',
      'Electric Vehicle Powertrain & Thermal Management',
      'Coimbatore Foundry & Precision Tooling Practicum',
    ],
    careers: ['Robotics Engineer', 'EV Powertrain Designer', 'Manufacturing Lead', 'CAE Analyst'],
  },
  {
    id: 'be-eee',
    code: 'SKC-ENG-105',
    title: 'Electrical and Electronics Engineering',
    degree: 'B.E.',
    level: 'UG',
    school: 'engineering',
    schoolLabel: 'Engineering & Technology',
    duration: '4 Years',
    intake: 120,
    accreditation: 'NBA Accredited',
    summary:
      'Smart power grids, high-voltage power electronics, renewable microgrids, and electric mobility drive systems.',
    eligibility: '10+2 with Physics, Chemistry, and Mathematics.',
    highlights: [
      'Power Electronics & Motor Control Drives',
      'Solar & Wind Microgrid Integration',
      'High-Voltage Protection & SCADA Grids',
      'Battery Management Systems Lab',
    ],
    careers: ['Power Systems Engineer', 'EV Drive Engineer', 'Grid Automation Specialist', 'Energy Auditor'],
  },
  {
    id: 'bcom-fintech',
    code: 'SKC-MGT-201',
    title: 'Commerce, Accounting and FinTech',
    degree: 'B.Com.',
    level: 'UG',
    school: 'management',
    schoolLabel: 'Commerce & Management',
    duration: '3 Years',
    intake: 120,
    accreditation: 'NAAC A++',
    summary:
      'Corporate accounting, direct taxation, financial derivatives, and algorithmic payment infrastructure.',
    eligibility: '10+2 in Commerce, Accountancy, or Mathematics from a recognized board.',
    highlights: [
      'IFRS & Corporate Financial Reporting',
      'Digital Banking, UPI & RegTech Compliance',
      'Corporate Taxation & Audit Practicum',
      'Financial Modeling with Python & Excel',
    ],
    careers: ['Financial Analyst', 'Tax Consultant', 'FinTech Product Associate', 'Audit Associate'],
  },
  {
    id: 'bba-global',
    code: 'SKC-MGT-202',
    title: 'Business Administration and Supply Chain',
    degree: 'B.B.A.',
    level: 'UG',
    school: 'management',
    schoolLabel: 'Commerce & Management',
    duration: '3 Years',
    intake: 120,
    accreditation: 'NAAC A++',
    summary:
      'Operations research, international trade logistics, brand strategy, and entrepreneurial venture building.',
    eligibility: '10+2 in any discipline with minimum 50% aggregate.',
    highlights: [
      'Global Logistics & Lean Operations',
      'Consumer Behavior & Brand Strategy',
      'Business Analytics & ERP Systems',
      'South India Industrial Corridor Field Study',
    ],
    careers: ['Operations Manager', 'Supply Chain Planner', 'Management Trainee', 'Brand Strategist'],
  },
  {
    id: 'bsc-biotech',
    code: 'SKC-SCI-301',
    title: 'Biotechnology and Molecular Sciences',
    degree: 'B.Sc.',
    level: 'UG',
    school: 'sciences',
    schoolLabel: 'Sciences & Humanities',
    duration: '3 Years',
    intake: 60,
    accreditation: 'DBT Star Scheme',
    summary:
      'Genomics, bioprocess engineering, clinical microbiology, and sustainable agricultural bio-solutions.',
    eligibility: '10+2 with Biology / Biotechnology and Chemistry.',
    highlights: [
      'Recombinant DNA & PCR Diagnostics',
      'Industrial Bioreactor Fermentation',
      'Bioinformatics & Protein Modeling',
      'Western Ghats Biodiversity Research Project',
    ],
    careers: ['Clinical Research Associate', 'Bioprocess Specialist', 'Genomics Analyst', 'Quality Control Lead'],
  },
  {
    id: 'mba-analytics',
    code: 'SKC-MGT-401',
    title: 'Master of Business Administration',
    degree: 'M.B.A.',
    level: 'PG',
    school: 'management',
    schoolLabel: 'Commerce & Management',
    duration: '2 Years',
    intake: 120,
    accreditation: 'AICTE & Anna Univ',
    summary:
      'Executive leadership across finance, human capital, quantitative operations, and digital enterprise transformation.',
    eligibility: 'Recognized Bachelor degree (50%+) with valid TANCET / CAT / MAT score.',
    highlights: [
      'Dual Specialization in Finance & Business Analytics',
      'Case-Method Strategy Seminars',
      'Summer Corporate Consulting Internship',
      'Venture Incubation & Capital Pitch Studio',
    ],
    careers: ['Management Consultant', 'Product Manager', 'Investment Associate', 'Operations Lead'],
  },
  {
    id: 'me-vlsi',
    code: 'SKC-ENG-402',
    title: 'VLSI Design and Embedded Systems',
    degree: 'M.E.',
    level: 'PG',
    school: 'engineering',
    schoolLabel: 'Engineering & Technology',
    duration: '2 Years',
    intake: 36,
    accreditation: 'AICTE Approved',
    summary:
      'Sub-micron SoC verification, RTL synthesis, low-power ASIC physical design, and automotive safety firmware.',
    eligibility: 'B.E. / B.Tech. in ECE, EEE, or CSE with valid GATE / CEETA-PG score.',
    highlights: [
      'SystemVerilog & UVM Verification Methodology',
      'Cadence & Synopsys Full-Custom IC Flow',
      'FPGA Prototyping & Hardware Acceleration',
      '1-Year Semiconductor Industry Thesis',
    ],
    careers: ['ASIC Physical Design Engineer', 'SoC Verification Lead', 'FPGA Architect'],
  },
  {
    id: 'mca-cloud',
    code: 'SKC-CMP-403',
    title: 'Master of Computer Applications',
    degree: 'M.C.A.',
    level: 'PG',
    school: 'computing',
    schoolLabel: 'Computing & Data',
    duration: '2 Years',
    intake: 60,
    accreditation: 'AICTE Approved',
    summary:
      'Enterprise software engineering, cloud-native microservices, cybersecurity, and scalable web architectures.',
    eligibility: 'Bachelor degree with Mathematics at 10+2 or graduation level + TANCET.',
    highlights: [
      'Cloud Infrastructure & Kubernetes Orchestration',
      'Enterprise Security & Ethical Penetration Testing',
      'Distributed Databases & Event Streaming',
      'Industry Software Engineering Residency',
    ],
    careers: ['Software Architect', 'Cloud Security Engineer', 'Senior Full-Stack Engineer'],
  },
  {
    id: 'phd-interdisciplinary',
    code: 'SKC-RES-501',
    title: 'Doctoral Research Programmes',
    degree: 'Ph.D.',
    level: 'Ph.D.',
    school: 'sciences',
    schoolLabel: 'Sciences & Humanities',
    duration: '3–5 Years',
    intake: 40,
    accreditation: 'Anna & Bharathiar Univ',
    summary:
      'Full-time and part-time doctoral fellowships across Engineering, Computer Science, Commerce, and Applied Sciences.',
    eligibility: 'Master degree with 55%+ marks and institutional doctoral entrance / UGC-NET.',
    highlights: [
      'DST-FIST & AICTE MODROBS Funded Laboratories',
      'Monthly Institutional Teaching Fellowships',
      'Scopus / IEEE / Springer Publication Support',
      'International Co-Supervision Mobility Grants',
    ],
    careers: ['Academic Faculty', 'Principal R&D Scientist', 'Industrial Research Fellow'],
  },
];

export const RESEARCH_CENTERS: ResearchCenter[] = [
  {
    id: 'robotics-autonomous',
    index: '01',
    title: 'Centre for Autonomous Systems & Industrial Robotics',
    department: 'School of Engineering & Technology',
    leadInvestigator: 'Dr. R. Subramanian, Ph.D.',
    grantsValue: '₹3.4 Cr',
    patentsFiled: 28,
    publications: 142,
    description:
      'Equipped with 6-axis industrial manipulators, autonomous mobile platforms, and real-time vision guidance rigs supporting Coimbatore’s precision manufacturing corridor.',
    focusAreas: ['Cobots & Vision Inspection', 'Autonomous Warehouse Navigation', 'Precision CNC Retrofits'],
    image: COLLEGE_IMAGES.roboticsLab,
  },
  {
    id: 'clean-energy',
    index: '02',
    title: 'Clean Energy, EV Powertrain & Smart Microgrid Lab',
    department: 'Electrical & Mechanical Sciences',
    leadInvestigator: 'Dr. K. Meenakshi Sundaram, Ph.D.',
    grantsValue: '₹2.1 Cr',
    patentsFiled: 19,
    publications: 98,
    description:
      'Developing bidirectional EV traction inverters, thermal battery enclosures, and solar-coupled rural microgrids tested in partnership with regional industrial OEMs.',
    focusAreas: ['Solid-State BMS Diagnostics', 'Solar Microgrid Protection', 'EV Traction Inverters'],
  },
  {
    id: 'applied-ai-cloud',
    index: '03',
    title: 'Applied AI, Vernacular NLP & Enterprise Computing Studio',
    department: 'School of Computing & Data Science',
    leadInvestigator: 'Dr. S. Karthikeyan, Ph.D.',
    grantsValue: '₹1.8 Cr',
    patentsFiled: 16,
    publications: 164,
    description:
      'Advancing low-resource Tamil & South Asian clinical NLP models, edge computer vision for textile defect detection, and zero-trust cloud telemetry.',
    focusAreas: ['Tamil Healthcare NLP', 'Textile Vision Quality Control', 'Zero-Trust Cloud Security'],
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    tabLabel: 'Central Library',
    title: 'Dr. APJ Abdul Kalam Central Library',
    subtitle: '24/7 Digital Commons & 1,18,000+ Print Volumes',
    image: COLLEGE_IMAGES.centralLibrary,
    caption: 'Fig. 2 — Double-height timber reading atrium inside the Central Library.',
    description:
      'Spanning 42,000 sq. ft. across three sunlit levels, the Central Library houses specialized engineering monographs, archival Tamil and Commerce collections, quiet dissertation carrels, and institutional access to IEEE Xplore, ACM Digital Library, and Springer Nature.',
    specs: [
      { label: 'Print Volumes', value: '1,18,400+' },
      { label: 'E-Journals & Databases', value: '14,200+' },
      { label: 'Reading Capacity', value: '750 Seats' },
      { label: 'Operating Hours', value: '07:30 – 22:00' },
    ],
  },
  {
    id: 'auditorium',
    tabLabel: 'Convocation Hall',
    title: 'Sri Krishna Auditorium & Lecture Theatre',
    subtitle: 'Acoustically Engineered 1,400-Seat Plenary Venue',
    image: COLLEGE_IMAGES.auditorium,
    caption: 'Fig. 3 — Teakwood-paneled plenary auditorium during an academic convocation.',
    description:
      'Designed for international symposia, annual convocations, industry hackathons, and cultural festivals. Features dual 4K laser projection, concert-grade acoustic baffling, and live multi-camera broadcast links to seminar halls across campus.',
    specs: [
      { label: 'Seating Capacity', value: '1,400 Guests' },
      { label: 'Seminar Halls', value: '8 Connected' },
      { label: 'Acoustic Rating', value: 'NC-20 Studio' },
      { label: 'Accessibility', value: 'Step-Free Ramps' },
    ],
  },
  {
    id: 'labs',
    tabLabel: 'Maker & Research Labs',
    title: 'Kuniyamuthur Innovation & Prototyping Studios',
    subtitle: '48 Specialized Laboratories & 24-Hour Maker Space',
    image: COLLEGE_IMAGES.roboticsLab,
    caption: 'Fig. 4 — Undergraduate and doctoral scholars calibrating robotic prototypes.',
    description:
      'Student teams design, mill, solder, and validate hardware and software prototypes under faculty mentorship. Industry-sponsored studios with Bosch, Texas Instruments, Cisco, and Dassault Systèmes provide real production tooling.',
    specs: [
      { label: 'Specialized Labs', value: '48 Studios' },
      { label: 'Industry CoEs', value: '12 Partners' },
      { label: 'HPC GPU Nodes', value: '64 A100 GPUs' },
      { label: 'Patent Cell Support', value: '100% Funded' },
    ],
  },
  {
    id: 'residential',
    tabLabel: 'Campus & Hostels',
    title: 'Western Ghats Foothills Residential Campus',
    subtitle: '112-Acre Eco-Campus with Separate Men’s & Women’s Halls',
    image: COLLEGE_IMAGES.heroCampus,
    caption: 'Fig. 5 — Main academic quadrangle framing the misty Western Ghats hills.',
    description:
      'Located 8 km from Coimbatore Junction along the Palakkad Highway in Kuniyamuthur, our green campus integrates rainwater harvesting, solar rooftops, 400m synthetic athletics tracks, indoor badminton courts, and hygienic multi-cuisine dining halls.',
    specs: [
      { label: 'Campus Area', value: '112 Acres' },
      { label: 'Hostel Capacity', value: '3,800 Beds' },
      { label: 'Transport Fleet', value: '68 Buses' },
      { label: 'Solar Generation', value: '1.2 MWp' },
    ],
  },
];

export const SPORTS_GROUND_DETAILS = {
  kicker: 'Central Athletics & Football Ground',
  title: 'Kuniyamuthur Main Sports Ground & Football Pitch',
  image: COLLEGE_IMAGES.sportsGround,
  caption:
    'Fig. 6 — Students competing in an evening football match on the Kuniyamuthur grass pitch bordered by the 400m athletics track.',
  description:
    'Set against the Western Ghats, our flagship 8.5-acre outdoor sports complex features a regulation natural-grass football pitch, an 8-lane 400m athletics track, floodlit practice zones, and covered spectator stands hosting Anna University Zonal championships and daily intramural student matches.',
  specs: [
    { label: 'Football Pitch Size', value: '105 m × 68 m' },
    { label: 'Athletics Track', value: '8-Lane · 400 m' },
    { label: 'Spectator Gallery', value: '2,500 Seats' },
    { label: 'Practice Hours', value: '05:30 – 20:30' },
  ],
} as const;

export const PLACEMENT_HIGHLIGHTS = [
  { metric: '₹44.0 LPA', label: 'Highest Annual Offer (2025)' },
  { metric: '₹7.8 LPA', label: 'Median Graduate Package' },
  { metric: '240+', label: 'Recruiting Organizations' },
  { metric: '1,680+', label: 'Total Offers Extended' },
] as const;

export const RECRUITER_PARTNERS: RecruiterPartner[] = [
  { name: 'Zoho Corporation', sector: 'Software & Cloud', rolesOffered: 'Member Technical Staff', hires2025: 68 },
  { name: 'Amazon India', sector: 'Software & Cloud', rolesOffered: 'SDE I & Cloud Support', hires2025: 22 },
  { name: 'Cisco Systems', sector: 'Software & Cloud', rolesOffered: 'Network & Security Eng.', hires2025: 19 },
  { name: 'Bosch Global Software', sector: 'Core Engineering', rolesOffered: 'Embedded & ADAS Eng.', hires2025: 84 },
  { name: 'Caterpillar India', sector: 'Core Engineering', rolesOffered: 'Design & Powertrain Eng.', hires2025: 31 },
  { name: 'L&T Technology Services', sector: 'Core Engineering', rolesOffered: 'VLSI & Mechanical R&D', hires2025: 57 },
  { name: 'Deloitte India', sector: 'Consulting & Finance', rolesOffered: 'Risk & Tech Advisory', hires2025: 46 },
  { name: 'EY Global Delivery', sector: 'Consulting & Finance', rolesOffered: 'Tax & FinTech Analyst', hires2025: 39 },
  { name: 'Federal Bank', sector: 'Consulting & Finance', rolesOffered: 'Management Trainee', hires2025: 24 },
];

export const ALUMNI_OUTCOMES: AlumniOutcome[] = [
  {
    name: 'Ananya Balasubramanian',
    batch: 'Class of 2022',
    program: 'B.E. Computer Science',
    role: 'Software Development Engineer II',
    company: 'Amazon, Bengaluru',
    quote:
      'Working from the third semester in our Distributed Systems lab gave me the confidence to build real fault-tolerant services before graduation. That portfolio directly shaped my campus placement.',
  },
  {
    name: 'Praveen Kumar Natarajan',
    batch: 'Class of 2021',
    program: 'B.E. Mechanical Engineering',
    role: 'Senior Powertrain Design Engineer',
    company: 'Caterpillar, Chennai',
    quote:
      'Coimbatore’s industrial ecosystem combined with Sri Krishna’s Bosch and CAD studios meant we never learned theory in isolation. We tested tolerances on real CNC assemblies.',
  },
  {
    name: 'Divya Dharshini S.',
    batch: 'Class of 2023',
    program: 'B.Com. FinTech & M.B.A.',
    role: 'Financial Risk Consultant',
    company: 'Deloitte, Hyderabad',
    quote:
      'The faculty pushed us to pair statutory accounting rigor with Python financial modeling. Entering corporate consulting felt like a seamless continuation of our seminar casework.',
  },
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Online Inquiry & Application',
    detail:
      'Submit your academic details and preferred school online or visit our Kuniyamuthur Admissions Pavilion in Coimbatore.',
  },
  {
    step: '02',
    title: 'Merit & Counseling Allocation',
    detail:
      'Engineering seats are allotted via TNEA single-window counseling and institutional merit quota; PG admissions consider TANCET, GATE, or CAT.',
  },
  {
    step: '03',
    title: 'Credential Verification & Scholarship Review',
    detail:
      'Merit, first-graduate, and sports scholarships are assessed transparently during document verification prior to fee remittance.',
  },
  {
    step: '04',
    title: 'Campus Induction & Bridge Residency',
    detail:
      'Two-week foundational orientation in Coimbatore covering mathematics, design thinking, communication, and hostel allocation.',
  },
] as const;
