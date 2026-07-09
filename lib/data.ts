export const site = {
  title: 'Cognition X Lab',
  contactEmail: 'jinying.xu@nus.edu.sg',
  address: 'SDE2, 2 Architecture Dr., Singapore 117565'
}

/* ===== People ===== */
export type Person = {
  id: string
  slug: string
  name: string
  role: string
  group: 'PI' | 'Postdoc' | 'PhD' | 'Masters' | 'Undergrad' | 'Visiting' | 'Alumni'
  avatar: string
  bio: string
  interests: string[]
  education?: Array<{
    degree: string
    institution: string
    year?: string
  }>
  links: {
    scholar?: string
    github?: string
    linkedin?: string
    website?: string
    email?: string
  }
  cvUrl?: string
  intake?: string
  joinDate?: string
}

export const people: Person[] = [
  {
    id: 'pi-1',
    slug: 'jinying-xu',
    name: 'Dr. Jinying Xu',
    role: 'Assistant Professor, Department of the Built Environment (DBE), College of Design and Engineering (CDE), National University of Singapore (NUS)',
    group: 'PI',
    avatar: '/people/jinying-xu.jpg',
    bio: 'Marie Skłodowska–Curie Fellow (2022–2025) at University of Cambridge, Post-doctoral Fellow (2021-2022) at the University of Hong Kong',
    interests: ['Smart Construction', 'Digital Technologies', 'Digital Transformation', 'Data Science', 'Sustainable Infrastructure', 'Systems Thinking', 'Organization Technology Transformation', 'Context-awareness', 'Digital Twins', 'Cognitive Facility Management', 'Construction Project Management', 'Lean Construction'],
    education: [
      {
        degree: 'PhD in Digital Construction',
        institution: 'The University of Hong Kong',
        year: '2021'
      },
      {
        degree: 'MSc in Project Management',
        institution: 'Tongji University',
        year: '2017'
      },
      {
        degree: 'BEng in Engineering Management',
        institution: 'Harbin Institute of Technology',
        year: '2014'
      },
      {
        degree: 'LLB in Sociology',
        institution: 'Harbin Institute of Technology',
        year: '2014'
      }
    ],
    links: {
      scholar: 'https://scholar.google.com/citations?user=McTBzwoAAAAJ&hl=en',
      linkedin: 'https://www.linkedin.com/in/jinying-xu-5a2394208',
      website: 'https://cde.nus.edu.sg/dbe/staff/jinying-xu/',
      email: 'jinying.xu@nus.edu.sg',
    },
    cvUrl: '#',
    joinDate: 'Fall 2025',
  },
  {
    id: 'postdoc-1',
    slug: 'christoph-Sydora',
    name: 'Christoph P. Sydora',
    role: 'Research Fellow',
    group: 'Postdoc',
    avatar: '/people/Chris.png',
    bio: 'Christoph is a Research Fellow researching includes automated building model evaluation/checking and rule encoding, automated design, occupancy simulation, augmented and virtual reality (AR/VR) model viewing, cloud-based model repositories and services, smart building controls, and automated construction planning.',
    interests: ['Building Information Modeling', 'Computer Science', 'Rule Compliance Checking'],
    education: [
      {
        degree: 'Doctor of Philosophy (PhD) in Computing Science',
        institution: 'University of Alberta',
        year: '2024'
      },
      {
        degree: 'Master of Science (MSc) in Computing Science',
        institution: 'University of Alberta',
        year: '2019'
      },
      {
        degree: 'Bachelor of Science (BSc) with Specialization in Computing Science',
        institution: 'University of Alberta',
        year: '2016'
      }
    ],
    links: {
      scholar: 'https://scholar.google.com/citations?user=jvdogE4AAAAJ&hl=en&oi=ao',
      github: 'https://github.com/csydora',
      linkedin: 'https://www.linkedin.com/in/christoph-sydora-a7194b171/',
      website: 'https://csydora.ca/',
      email: 'csydora@nus.edu.sg',
    },
    intake: 'Spring 2026',
  },
  {
    id: 'phd-1',
    slug: 'ruiyan-zheng',
    name: 'Ruiyan Zheng',
    role: 'Research Engineer/PhD student',
    group: 'PhD',
    avatar: '/people/Ruiyan.png',
    bio: 'Ruiyan is a PhD student researching AI-driven project management solutions for construction. His work involves machine learning applications for risk prediction and resource optimization.',
    interests: ['Lean construction', 'Project schedule optimisation', 'Reinforcement learning'],
    education: [
      {
        degree: 'Master in Construction Management',
        institution: 'Dalian University of Technology',
        year: '2025'
      },
      {
        degree: 'BEng in Construction Management',
        institution: 'Qingdao University of Technology',
        year: '2022'
      }
    ],
    links: {
      scholar: 'https://scholar.google.com/citations?user=3SRDfx8AAAAJ&hl=en',
      github: 'https://github.com/RyanZ-O?tab=repositories',
      linkedin: 'https://www.linkedin.com/in/ruiyan-zheng-473807380/',
      email: 'zhengruiyan@u.nus.edu',
    },
    intake: 'Spring 2026',
  },
  {
    id: 'ms-1',
    slug: 'xinyan-zhang',
    name: 'Xinyan Zhang',
    role: 'MSc Student',
    group: 'Masters',
    avatar: '/people/Xinyan.png',
    bio: 'Xinyan is pursuing her MSc degree in Building Performance and Sustainability at National University of Singapore. She works on Climate-Comfort-Carbon optimised design of buildings.',
    interests: ['Sustainability', 'Architecture design'],
    education: [
      {
        degree: 'Bachelor of Architecture',
        institution: 'Xiamen University',
        year: '2025'
      }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/%E6%98%95%E5%B2%A9-%E5%BC%A0-05726b37a/',
      email: 'e1583222@u.nus.edu',
    },
    intake: 'Fall 2025',
  },
  {
    id: 'ms-2',
    slug: 'ruixuan-qi',
    name: 'Ruixuan Qi',
    role: 'Part-Time Research Assistant (MSc Student)',
    group: 'Masters',
    avatar: '/people/Ruixuan.png',
    bio: 'Ruixuan is pursuing his MSc degree in Smart Industries and Digital Transformation at National University of Singapore. He works as a part-time RA on lean construction and process optimisation',
    interests: ['Scheduling', 'Dynamic programming'],
    education: [
      {
        degree: 'BEng in Computer Science and Engineering',
        institution: 'The Chinese University of Hong Kong (Shenzhen)',
        year: '2025'
      }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/ruixuan-qi',
      email: 'ruixuan-qi@u.nus.edu',
    },
    intake: 'Fall 2025',
  },
  {
    id: 'ms-3',
    slug: 'Dossiya',
    name: 'Dossiya Dakou',
    role: 'Visting Master Student',
    group: 'Masters',
    avatar: '',
    bio: 'Dossiya is pursuing his MSc degree in Sustainable Engineering at Arizona State University. He is visiting us for three months funded by Mastercard Scholarship',
    interests: ['Sustainability', 'Infrastructure'],
    education: [].
    links: {
      email: 'ruixuan-qi@u.nus.edu',
    },
    intake: 'Fall 2025',
  }, 
  {
    id: 'ug-1',
    slug: 'raquel-jardim',
    name: 'Raquel Jardim',
    role: 'Internship and Research Immersion in Singapore (IRIS)@NUS Student',
    group: 'Undergrad',
    avatar: '/people/Raquel.jpg',
    bio: 'Raquel is an Economics undergraduate student at Williams College. Her research focuses on Behavioral and Applied Microeconomics, with projects analyzing online content creation platforms as income insurance and the behavioral drivers of humanitarian giving. As a Research Intern at the National University of Singapore, she investigates the relationship between corporate carbon emissions and greenwashing.',
    interests: ['Behavioral Economics', 'Applied Econometrics', 'Digital Labor Markets', 'Environmental Economics', 'Economics of Risk'],
    education: [],
    links: {
      email: 'dakou.dossiya@u.nus.edu',
    },
    intake: 'Summer 2026',
  },
  {
    id: 'ug-2',
    slug: 'ahad-nardekar',
    name: 'Ahad Nardekar',
    role: 'Internship and Research Immersion in Singapore (IRIS)@NUS Student',
    group: 'Undergrad',
    avatar: '/people/Ahad.jpg',
    bio: 'Ahad is an undergraduate student at Indian Institute of Technology Delhi pursuing B.Tech in Civil Engineering. His research focuses on application of AI/ML models to Core Engineering Problems, with prior experience of working on projects such as Structural Analysis Engine, Hydrological Catchment Analysis and Dynamic Analysis of Cracking Patterns in Failures of Structures. As a Research Intern at National University of Singapore, in the Department of Built Environment, he is working on the Forensic Accounting of Corporate Sustainability Pledges using LLMs.',
    interests: ['Civil Engineering', 'Machine Learning', 'Structural Analysis', 'Data Structures & Algorithms', 'Computational Modelling', 'Management Accounting', 'Financial Statement Analysis', 'Deep Learning'],
    education: [],
    links: {
      email: 'ahadnardekar@u.nus.edu',
    },
    intake: 'Summer 2026',
  }
]


// --- PI Google Scholar -------------------------------------------------------
export const piScholarUrl =
  'https://scholar.google.com/citations?user=McTBzwoAAAAJ&hl=en'

// --- Publications ------------------------------------------------------------
export type Publication = {
  id: string
  title: string
  authors: string[] 
  venue: string            
  year: number
  url?: string
  pdfUrl?: string
  doi?: string
  codeUrl?: string
  badges?: string[]
  kind?: 'journal' | 'conference' | 'book' | 'preprint'
}

// Seeded from your list (newest first within each category).
// Tip: To add more, just copy one item and adjust fields.
export const publications: Publication[] = [
  // -------------------- JOURNAL PAPERS --------------------
  {
    id: 'j-33',
    kind: 'journal',
    year: 2026,
    title: 'Analysis of Workflow Variability in Modular Integrated Construction Manufacturing Using Cooperative Game Theory',
    authors: ['Zhongze Yang', 'Weisheng Lu', 'Liupengfei Wu', 'Jinying Xu'],
    venue: 'Journal of Construction Engineering and Management, 152(8), 04026115',
    url: 'https://doi.org/10.1061/JCEMD4.COENG-17200',
  },
  {
    id: 'j-32',
    kind: 'journal',
    year: 2026,
    title: 'Reducing or transferring emissions? Quantifying city-scale embodied carbon flows and emission responsibility in the modular construction supply chain',
    authors: ['Xinping Wen', 'Wei Pan', 'Yue Teng', 'Daniel WM Chan', 'Jinying Xu'],
    venue: 'Sustainable Cities and Society, 107470',
    url: 'https://doi.org/10.1016/j.scs.2026.107470',
  },
  {
    id: 'j-31',
    kind: 'journal',
    year: 2025,
    title: 'Semantics-Based Connectivity Graph for Indoor Pathfinding Powered by Ifc-Graph',
    authors: ['Junxiang Zhu', 'Mun On Wong', 'Nicholas Nisbet', 'Jinying Xu', 'Tom Kelly', 'Sisi Zlatanova', 'Ioannis Brilakis'],
    venue: 'Automation in Construction, 171, 106019',
    url: 'https://doi.org/10.1016/j.autcon.2025.106019',
  },
  {
    id: 'j-30',
    kind: 'journal',
    year: 2024,
    title: 'Carbon data and its requirements in infrastructure-related GHG standards',
    authors: ['Jinying XU*', 'Kristen MacAskill'],
    venue: 'Environmental Science & Policy, 162, 103935',
    url: 'https://doi.org/10.1016/j.envsci.2024.103935',
  },
  {
    id: 'j-29',
    kind: 'journal',
    year: 2024,
    title:
      'Digital twins for engineering asset management: synthesis, analytical framework, and future directions',
    authors: ['Yongkui Li', 'Qinyue Wang', 'Xiyu Pan', 'Jian Zuo', 'Jinying XU', 'Yilong Han'],
    venue: 'Engineering, 41, 261–275',
    url: 'https://doi.org/10.1016/j.eng.2023.12.006',
  },
  {
    id: 'j-28',
    kind: 'journal',
    year: 2024,
    title:
      'Turning Pressure into Power: The Configuration Effect of Antecedents on the Digital Transformation of Engineering Enterprises',
    authors: ['Ying Wang', 'Jinying XU', 'Junying Liu*', 'Yunlong Li'],
    venue: 'Journal of Management in Engineering, 40(1), 04023059',
    doi: 'https://doi.org/10.1061/JMENEA.MEENG-5636',
  },
  {
    id: 'j-27',
    kind: 'journal',
    year: 2023,
    title:
      'Ensuring construction material provenance using Internet of Things and blockchain: Learning from the food industry',
    authors: ['Jinying XU', 'Jinfeng Lou*', 'Weisheng LU'],
    venue: 'Journal of Industrial Information Integration, 33, 100455',
    doi: 'https://doi.org/10.1016/j.jii.2023.100455',
  },
  {
    id: 'j-26',
    kind: 'journal',
    year: 2023,
    title:
      'How Does Hierarchy Steepness Affect Coordination in Project-Based Organizations? A Social Network Analysis',
    authors: ['Jinying XU*', 'Weisheng LU'],
    venue: 'Project Management Journal, 54(3), 306–321',
    doi: 'https://doi.org/10.1177/875697282211508',
  },
  {
    id: 'j-25',
    kind: 'journal',
    year: 2022,
    title:
      'A Blockchain-based Model with an Incentive for Cross-border Logistics Supervision and Data Sharing in Modular Construction',
    authors: ['Liupengfei WU', 'Xiao LI*', 'Rui ZHAO', 'Weisheng LU', 'Jinying XU', 'Fan XUE'],
    venue: 'Journal of Cleaner Production, 375',
    doi: 'https://doi.org/10.1016/j.jclepro.2022.133460',
  },
  {
    id: 'j-24',
    kind: 'journal',
    year: 2022,
    title:
      'Balancing privacy and occupational safety and health in construction: A blockchain-enabled P-OSH deployment framework',
    authors: ['Jinying XU*', 'Weisheng LU', 'Liupengfei WU', 'Xiao LI', 'Jinfeng LOU'],
    venue: 'Safety Science, 154, 105860',
    doi: 'https://doi.org/10.1016/j.ssci.2022.105860',
  },
  {
    id: 'j-23',
    kind: 'journal',
    year: 2022,
    title:
      'Developing a Human-Organization-Technology Fit (HOT) model for information technology adoption in organizations',
    authors: ['Jinying XU*', 'Weisheng LU'],
    venue: 'Technology in Society, 70, 102010',
    doi: 'https://doi.org/10.1016/j.techsoc.2022.102010',
  },
  {
    id: 'j-22',
    kind: 'journal',
    year: 2023, // venue says 2023; DOI lists 2022 online — keep 2023 per your list
    title:
      'A category and index hybrid (CIH) approach to measuring the levels of prefabrication',
    authors: ['Weisheng LU', 'Frank Ato GHANSA*', 'Jinying XU'],
    venue: 'International Journal of Construction Management',
    doi: 'https://doi.org/10.1080/15623599.2022.2084599',
  },
  {
    id: 'j-21',
    kind: 'journal',
    year: 2022,
    title:
      'Construction E-Inspection 2.0 in the COVID-19 Pandemic Era: A Blockchain-Based Technical Solution',
    authors: ['Weisheng LU', 'Liupengfei WU*', 'Jinying XU', 'Jinfeng LOU'],
    venue: 'Journal of Management in Engineering, 38(4), 04022032',
    doi: 'https://doi.org/10.1061/(ASCE)ME.1943-5479.0001063',
  },
  {
    id: 'j-20',
    kind: 'journal',
    year: 2022,
    title: 'Nomenclature for offsite construction',
    authors: ['Jinfeng LOU', 'Weisheng LU', 'Jinying XU*', 'Xiao LI', 'Jing WANG'],
    venue: 'Building Research & Information',
    doi: 'https://doi.org/10.1080/09613218.2022.2039586',
  },
  {
    id: 'j-19',
    kind: 'journal',
    year: 2022,
    title:
      'The technology-environment relationship revisited: Evidence from the impact of prefabrication on reducing construction waste',
    authors: ['Ruibo HU', 'Ke CHEN', 'Weili FANG', 'Linzi ZHENG', 'Jinying XU'],
    venue: 'Journal of Cleaner Production, 341, 130883',
    doi: 'https://doi.org/10.1016/j.jclepro.2022.130883',
  },
  {
    id: 'j-18',
    kind: 'journal',
    year: 2022,
    title:
      'Role of the built environment in the recovery from Covid-19: Evidence from a GIS-based natural experiment on the city blocks in Wuhan, China',
    authors: ['Maosu LI', 'Yi PENG', 'Yijie WU', 'Jinying XU', 'Tan TAN', 'Hui GUO', 'Weisheng LU', 'Gar-On YEH', 'Fan XUE'],
    venue: 'Frontiers in Built Environment, 7:813399',
    doi: 'https://doi.org/10.3389/fbuil.2021.813399',
  },
  {
    id: 'j-17',
    kind: 'journal',
    year: 2022,
    title:
      'Using blockchain to improve information sharing accuracy in the on-site assembly of modular construction',
    authors: ['Liupengfei WU', 'Weisheng LU', 'Rui ZHAO', 'Jinying XU', 'Xiao LI', 'Fan XUE'],
    venue: 'Journal of Management in Engineering, 38(3), 04022014',
    badges: ['Best Paper Award'],
    doi: 'https://doi.org/10.1061/(ASCE)ME.1943-5479.0001029',
  },
  {
    id: 'j-16',
    kind: 'journal',
    year: 2022,
    title:
      'Blockchain-based smart contract for smart payment in construction: A focus on the payment freezing and disbursement cycle',
    authors: ['Liupengfei WU', 'Weisheng LU', 'Jinying XU'],
    venue: 'Frontiers in Engineering Management, 9, 177–195',
    doi: 'https://doi.org/10.1007/s42524-021-0184-y',
  },
  {
    id: 'j-15',
    kind: 'journal',
    year: 2022,
    title:
      'Human-Organization-Technology Fit Model for BIM adoption in Construction Project Organizations: Impact factor analysis using SNA and comparative case study',
    authors: ['Jinying XU*', 'Weisheng LU', 'Eleni PAPADONIKOLAKI'],
    venue: 'Journal of Management in Engineering',
    doi: 'https://doi.org/10.1061/(ASCE)ME.1943-5479.0001013',
  },
  {
    id: 'j-14',
    kind: 'journal',
    year: 2022,
    title:
      'Blockchain-enabled IoT-BIM Platform (BIBP) for Supply Chain Management in Modular Construction',
    authors: ['Xiao LI', 'Weisheng LU', 'Fan XUE', 'Liupengfei WU', 'Rui ZHAO', 'Jinfeng LOU', 'Jinying XU'],
    venue: 'Journal of Construction Engineering and Management, 148(2), 04021195',
    url: 'https://ascelibrary.org/doi/abs/10.1061/%28ASCE%29CO.1943-7862.0002229',
  },
  {
    id: 'j-13',
    kind: 'journal',
    year: 2021,
    title:
      'Revisiting the effects of prefabrication on construction waste minimization: a quantitative study using bigger data',
    authors: ['Weisheng LU', 'Wendy M. Lee', 'Fan XUE', 'Jinying XU'],
    venue: 'Resources, Conservation and Recycling, 170, 105579',
    url: 'https://www.sciencedirect.com/science/article/pii/S0921344921001865',
  },
  {
    id: 'j-12',
    kind: 'journal',
    year: 2020,
    title:
      'A four-quadrant conceptual framework for analyzing extended producer responsibility in offshore prefabrication construction',
    authors: ['Jinying XU', 'Meng YE', 'Weisheng LU', 'Zhikang BAO', 'Chris WEBSTER'],
    venue: 'Journal of Cleaner Production, 124540',
    doi: 'https://doi.org/10.1016/j.jclepro.2020.124540',
  },
  {
    id: 'j-11',
    kind: 'journal',
    year: 2020,
    title:
      'An anatomy of waste generation flows in construction projects using passive bigger data',
    authors: ['Jinying XU', 'Weisheng LU', 'Meng YE', 'Chris WEBSTER', 'Fan XUE'],
    venue: 'Waste Management, 106, 162–172',
    url: 'https://www.sciencedirect.com/science/article/pii/S0956053X20301343',
  },
  {
    id: 'j-10',
    kind: 'journal',
    year: 2020,
    title:
      'Is the private sector more efficient? Big data analytics of construction waste management sectoral efficiency',
    authors: ['Jinying XU', 'Weisheng LU', 'Meng YE', 'Fan XUE', 'Xiaoling ZHANG', 'Billy F.P. LEE'],
    venue: 'Resources, Conservation and Recycling, 155, 104674',
    url: 'https://www.sciencedirect.com/science/article/pii/S0921344919305804',
  },
  {
    id: 'j-9',
    kind: 'journal',
    year: 2019,
    title:
      'Exploring the effects of building information modelling (BIM) on projects: A longitudinal social network analysis',
    authors: ['Weisheng LU', 'Jinying XU*', 'Jonas Söderlund'],
    venue: 'Journal of Construction Engineering and Management, 146(5), 04020037',
    url: 'https://ascelibrary.org/doi/abs/10.1061/%28ASCE%29CO.1943-7862.0001823',
  },
  {
    id: 'j-8',
    kind: 'journal',
    year: 2019,
    title:
      '‘Cognitive facility management’: definition, system architecture, and example scenario',
    authors: ['Jinying XU*', 'Weisheng LU', 'Fan XUE', 'Ke CHEN'],
    venue: 'Automation in Construction, 107, 102922',
    url: 'https://www.sciencedirect.com/science/article/pii/S0926580519302146',
  },
  {
    id: 'j-7',
    kind: 'journal',
    year: 2019,
    title:
      'Pervasive sensing technologies for facility management: A critical review',
    authors: ['Jinying XU*', 'Ke CHEN', 'Anna ZETKULIC', 'Fan XUE', 'Yuhan NIU', 'Weisheng LU'],
    venue: 'Facilities, 38(1/2), 161–180',
    url: 'https://www.emerald.com/insight/content/doi/10.1108/F-02-2019-0024/full/html',
  },
  {
    id: 'j-6',
    kind: 'journal',
    year: 2018,
    title:
      'Cross-boundary collaboration in waste management research: a network analysis',
    authors: ['Jinying XU', 'Weisheng LU', 'Fan XUE', 'Ke CHEN', 'Meng YE', 'Jing WANG', 'Xi CHEN'],
    venue: 'Environmental Impact Assessment Review, 73, 128–141',
    url: 'https://www.sciencedirect.com/science/article/pii/S0195925518301677',
  },
  {
    id: 'j-5',
    kind: 'journal',
    year: 2020,
    title:
      'Construction-Oriented Design for Manufacture and Assembly (DfMA) Guidelines',
    authors: ['Tan TAN', 'Weisheng LU*', 'Gangyi Tan', 'Fan XUE', 'Ke CHEN', 'Jinying XU*', 'Jing Wang', 'Shang Gao'],
    venue: 'Journal of Construction Engineering and Management, 146(8), 04020085',
    url: 'https://ascelibrary.org/doi/full/10.1061/%28ASCE%29CO.1943-7862.0001877?casa_token=dt_LQFFHFqIAAAAA%3A_C-JNZhj2ICcmJSzbbxb3_W5DuulL25rRHXrFP7bSkJ84WmOAUc6NMmy_NhER048EqN7Xuzn_9s',
  },
  {
    id: 'j-4',
    kind: 'journal',
    year: 2020,
    title:
      'Design for Manufacture and Assembly (DfMA) in construction: the old and the new',
    authors: ['Weisheng LU', 'Tan Tan', 'Jinying XU', 'Jing WANG', 'Ke CHEN', 'Shang GAO', 'Fan XUE'],
    venue: 'Architectural Engineering and Design Management',
    url: 'https://www.tandfonline.com/doi/abs/10.1080/17452007.2020.1768505?journalCode=taem20',
  },
  {
    id: 'j-3',
    kind: 'journal',
    year: 2018,
    title:
      'A cost-benefit analysis of green buildings with respect to construction waste minimization using big data in Hong Kong',
    authors: ['Xi CHEN', 'Weisheng LU', 'Fan XUE', 'Jinying XU'],
    venue: 'Journal of Green Building, 13(4), 61–76',
    url: 'https://meridian.allenpress.com/jgb/article-abstract/13/4/61/116285',
  },
  {
    id: 'j-2',
    kind: 'journal',
    year: 2016,
    title:
      'Evolutionary Analysis of Mega Infrastructure Investment and Finance Scheme in China from the Perspective of Institutional Transition',
    authors: ['Yun LE', 'Jinying XU*', 'Ju BAI'],
    venue: 'Journal of Tongji University (Natural Science), 44(8), 1272–1278 (Chinese)',
    url: 'http://www.cqvip.com/qk/90798x/201608/669853028.html',
  },
  {
    id: 'j-1',
    kind: 'journal',
    year: 2013,
    title:
      'Engineering management education inspired by the idea of achievement system',
    authors: ['Jian CHEN', 'Lei SUN', 'Jinying XU', 'Tianheng CHEN'],
    venue: 'Science & Technology Progress and Policy, 30(23), 117–119 (Chinese)',
    url: 'http://www.cqvip.com/qk/90284x/201323/48247119.html',
  },

  // -------------------- CONFERENCE PAPERS --------------------
   {
    id: 'c-22',
    kind: 'conference',
    year: 2026,
    title:
      'AI-Enabled Climate-Health Nexus Framework for Decision-Support in Sustainable Urban Green Infrastructure',
    authors: ['Phoebe Xu', 'Jinying Xu', 'Jeff Clark', 'Ravi Shankar'],
    venue: 'Proceedings of the 43rd International Symposium on Automation and Robotics in Construction (ISARC 2026))',
    url: 'https://doi.org/10.22260/ISARC2026/0115',
  },
  {
    id: 'c-21',
    kind: 'conference',
    year: 2026,
    title:
      'A Data Ontology for Integrated Resilience Assessment of Transportation Systems in Extreme Weather Events',
    authors: ['Jinying Xu', 'Mukun Liu', 'Zizhe Han', 'Wei Bi', 'Nan Li', 'Kristen MacAskill'],
    venue: 'International Conference on Computing in Civil Engineering 2026 (i3CE 2026)',
    url: '',
  },
  {
    id: 'c-20',
    kind: 'conference',
    year: 2026,
    title:
      'A multi-agent data-to-model workflow for make-ready assessment',
    authors: ['Ruixuan Qi', 'Jinying Xu', 'Ruiyan Zheng'],
    venue: 'Proceedings of the 34th Annual Conference of the International Group for Lean Construction (IGLC 34)',
    url: 'https://doi.org/10.24928/2026/0266',
  },
  {
    id: 'c-19',
    kind: 'conference',
    year: 2026,
    title:
      'A Synergized LLM-KG Framework for Domain Knowledge Cognition',
    authors: ['Ruiyan Zheng', 'Jinying Xu'],
    venue: 'Proceedings of the 43rd International Symposium on Automation and Robotics in Construction (ISARC 2026)',
    url: 'https://doi.org/10.22260/ISARC2026/0259',
  },
  {
    id: 'c-18',
    kind: 'conference',
    year: 2026,
    title:
      'Defining the Digital Road Manager-Public Consultation Response',
    authors: ['Varun Kumar Reja', 'Jinying Xu', 'Zizhen Xu', 'Junxiang Zhu', 'Linjun Lu', 'Shirin Malihi', 'Yuandong Pan', 'Mengtian Yin', 'Abbas Solouki', 'Zhaojie Sun', 'Khashayar Kazemzadeh', 'Kai-Fung Chu', 'Yue Xie', 'Jie Liu', 'Judith Fauth'],
    venue: 'Conference of European Directors of Roads (CEDR)',
    url: 'https://doi.org/10.17863/CAM.131863',
  },
  {
    id: 'c-17',
    kind: 'conference',
    year: 2025,
    title:
      'How good are the best practices in carbon reduction? UK highway sector case studies',
    authors: ['Jinying XU', 'Kristen MacAskill'],
    venue: 'Proceedings of the 42nd International Symposium on Automation and Robotics in Construction (ISARC 2025)',
    url: 'https://doi.org/10.22260/ISARC2025/0097',
  },
  {
    id: 'c-16',
    kind: 'conference',
    year: 2025,
    title:
      'Extending IFC Data Structure for Carbon Digital Twin: An IFC Road Example',
    authors: ['Jinying XU', 'Junxiang Zhu', 'Mengtian Yin', 'Kristen MacAskill', 'Ioannis Brilakis'],
    venue: 'EC3 Conference 2025, Porto, Portugal',
    url: 'https://doi.org/10.17863/CAM.118098',
  },
  {
    id: 'c-15',
    kind: 'conference',
    year: 2024,
    title:
      'Information requirements over the asset lifecycle to include carbon into digital twin: A UK highway examplee',
    authors: ['Jinying XU', 'Kristen MacAskill', 'Mengtian Yin','Junxiang Zhu',  'Ioannis Brilakis'],
    venue: 'CIB W78 2024 Conference, Marrakesh, Morocco',
    url: 'https://itc.scix.net/pdfs/w78-2024-paper_146.pdf',
  },
  {
    id: 'c-14',
    kind: 'conference',
    year: 2023,
    title:
      'A carbon data trustworthiness framework for the construction sector',
    authors: ['Jinying XU', 'Kristen MacAskill'],
    venue: 'EC3 Conference 2023, Crete, Greece',
    url: 'https://ec-3.org/publications/conferences/EC32023/papers/EC32023_261.pdf',
  },
  {
    id: 'c-13',
    kind: 'conference',
    year: 2021,
    title:
      'Impacts of the COVID-19 Pandemic on construction industry: a comparison between Hong Kong and Singapore',
    authors: ['Jinying XU', 'Zhongze YANG', 'Weisheng LU', 'Fan XUE'],
    venue:
      'The 26th International Symposium on the Advancement of Construction Management and Real Estate, Beijing, China',
  },
  {
    id: 'c-12',
    kind: 'conference',
    year: 2021,
    title:
      'A generic framework for BIM component naming',
    authors: ['Jinfeng LOU', 'Jinying XU', 'Weisheng LU', 'Fan XUE'],
    venue:
      'The 26th International Symposium on the Advancement of Construction Management and Real Estate, Beijing, China',
  },
  {
    id: 'c-11',
    kind: 'conference',
    year: 2021,
    title:
      'Cognitive Modular Building to Enhance User Wellbeing: An Insight from Literature Review on Potential Design Considerations and Benefits',
    authors: ['Frank Ato GHANSAH', 'Weisheng LU', 'Jinying XU'],
    venue:
      'The 26th International Symposium on the Advancement of Construction Management and Real Estate',
  },
  {
    id: 'c-10',
    kind: 'conference',
    year: 2020,
    title:
      'The Iron Triangle of BIM adoption in construction project organizations',
    authors: ['Jinying XU*', 'Weisheng LU'],
    venue:
      'The 25th International Symposium on the Advancement of Construction Management and Real Estate, Wuhan, China',
    badges: ['Outstanding Paper Award'],
  },
  {
    id: 'c-9',
    kind: 'conference',
    year: 2020,
    title:
      'Indoor-outdoor navigation with no beacons: Compensating smartphone AR positioning errors with 3D pedestrian network',
    authors: ['Jinying XU', 'Fan XUE', 'Alain CHIARADIA', 'Chris WEBSTER'],
    venue: 'Construction Research Congress 2020, Tempe, USA',
    url: 'https://ascelibrary.org/doi/abs/10.1061/9780784482858.049',
  },
  {
    id: 'c-8',
    kind: 'conference',
    year: 2019,
    title:
      'How do different professionals collaborate in construction projects? A social network analysis perspective',
    authors: ['Jinying XU*', 'Weisheng LU', 'Ke CHEN'],
    venue:
      'The 24th International Symposium on the Advancement of Construction Management and Real Estate, Chongqing, China',
    badges: ['Excellent Paper Award'],
  },
  {
    id: 'c-7',
    kind: 'conference',
    year: 2019,
    title:
      'Cognitive Facilities Management: Definition and Architecture',
    authors: ['Jinying XU*', 'Weisheng LU', 'Ling Hin LI'],
    venue:
      'International Conference of Smart Infrastructure and Construction 2019, Cambridge, UK',
    url: 'https://www.icevirtuallibrary.com/doi/full/10.1680/icsic.64669.115',
  },
  {
    id: 'c-6',
    kind: 'conference',
    year: 2019,
    title:
      'The Gateway to Integrating User Behavior Data in “Cognitive Facility Management”',
    authors: ['Jinying XU*', 'Weisheng LU', 'Jing WANG'],
    venue:
      'The 4th International Conference on Civil and Building Engineering Informatics (ICCBEI 2019), Sendai, Japan',
    url: 'https://www.researchgate.net/profile/Jinying_Xu6/publication/337560970_The_Gateway_to_Integrating_User_Behavior_Data_in_Cognitive_Facility_Management/links/5dde103aa6fdcc2837ed9628/The-Gateway-to-Integrating-User-Behavior-Data-in-Cognitive-Facility-Management.pdf',
  },
  {
    id: 'c-5',
    kind: 'conference',
    year: 2019,
    title:
      'Design for construction waste management',
    authors: ['Jinying XU*', 'Weisheng LU'],
    venue:
      'The 2nd International Conference on Sustainable Buildings and Structures (ICSBS 2019), Suzhou, China',
    url: 'https://www.researchgate.net/publication/337560974_Design_for_construction_waste_management',
  },
  {
    id: 'c-4',
    kind: 'conference',
    year: 2018,
    title:
      'Smart construction from head to toe: A closed-loop lifecycle management system based on IoT',
    authors: ['Jinying XU*', 'Weisheng LU', 'Jing WANG'],
    venue: 'Construction Research Congress 2018, New Orleans, USA',
    url: 'https://ascelibrary.org/doi/abs/10.1061/9780784481264.016',
  },
  {
    id: 'c-3',
    kind: 'conference',
    year: 2018,
    title:
      '3D point cloud data enabled facility management: A critical review',
    authors: ['Jinying XU*', 'Ke CHEN', 'Fan XUE', 'Weisheng LU'],
    venue:
      'The 23rd International Symposium on the Advancement of Construction Management and Real Estate, Guiyang, China',
    url: 'https://frankxue.com/pdf/xu18pcd.pdf',
  },
  {
    id: 'c-2',
    kind: 'conference',
    year: 2019,
    title:
      'Modeling the Last-Mile Problem of BIM Adoption',
    authors: ['Jing WANG', 'Weisheng LU', 'Jinying XU'],
    venue:
      'The 4th International Conference on Civil and Building Engineering Informatics (ICCBEI 2019), Sendai, Japan',
    url: 'https://www.researchgate.net/profile/Jinying_Xu6/publication/337561231_Modeling_the_Last-Mile_Problem_of_BIM_Adoption/links/5de7b8f7a6fdcc283704eb97/Modeling-the-Last-Mile-Problem-of-BIM-Adoption.pdf',
  },
  {
    id: 'c-1',
    kind: 'conference',
    year: 2018,
    title:
      'Personalized walkability assessment for pedestrian paths: An as-built BIM approach using ubiquitous augmented reality (AR) smartphone and deep transfer learning',
    authors: ['Fan XUE', 'Alain CHIARADIA', 'Chris WEBSTER', 'Diandian LIU', 'Jinying XU', 'Weisheng LU'],
    venue:
      'The 23rd International Symposium on the Advancement of Construction Management and Real Estate, Guiyang, China',
    url: 'https://pdfs.semanticscholar.org/6a68/e97392837b2632800d8d4a0ba57b91cbc3aa.pdf',
  },

  // -------------------- BOOK CHAPTERS --------------------
  {
    id: 'b-10',
    kind: 'book',
    year: 2025,
    title:
      'Blockchain in construction supply chain management',
    authors: ['Liupengfei Wu', 'Jinying Xu', 'Weisheng Lu'],
    venue:
      'Blockchain, Smart Contracts and Distributed Ledger Technologies in the Built Environment: Key concepts, technologies, and applications',
    url: 'https://digital-library.theiet.org/doi/abs/10.1049/PBBE007E_ch9',
    },
  {
    id: 'b-9',
    kind: 'book',
    year: 2025,
    title:
      'Digital Technologies for Climate-Adaptive Smart Urban Transportation Systems',
    authors: ['Jinying XU*', 'Kristen MacAskill','Asaf Tzachor', 'Catherine Richards'],
    venue:
      'Routledge Handbook of Smart Built Environment',
    url: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003383840-19/digital-technologies-climate-adaptive-smart-urban-transportation-systems-jinying-xu-kristen-macaskill-asaf-tzachor-catherine-richards',
  },
  {
    id: 'b-8',
    kind: 'book',
    year: 2025,
    title:
      'Blockchain for Smart Built Environment: Current status, Challenges, and Prospects',
    authors: ['Liupengfei Wu', 'Weisheng Lu', 'Jinying Xu', 'Jinfeng Lou', 'Liang Yuan'],
    venue:
      'Routledge Handbook of Smart Built Environment',
    url: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003383840-20/blockchain-smart-built-environment-liupengfei-wu-weisheng-lu-jinying-xu-jinfeng-lou-liang-yuan',
  },
  {
    id: 'b-7',
    kind: 'book',
    year: 2025,
    title:
      'Generative Design for Excellence (DfX) for a Smart Built Environment: From Rule-based Imitation to Data-Driven Exploration',
    authors: ['Ziyu Peng', 'Yi Zhang', 'Weisheng Lu', 'Junjie Chen', 'Liupengfei Wu', 'Jinying Xu'],
    venue:
      'Routledge Handbook of Smart Built Environment',
    url: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003383840-4/generative-design-excellence-dfx-smart-built-environment-ziyu-peng-yi-zhang-weisheng-lu-junjie-chen-liupengfei-wu-jinying-xu',
  },
  {
    id: 'b-6',
    kind: 'book',
    year: 2023,
    title:
      'Big data analytics and project organizing',
    authors: ['Weisheng LU', 'Jinying XU*'],
    venue:
      'Research Handbook on Complex Project Organizing (Edward Elgar Publishing)',
  },
  {
    id: 'b-5',
    kind: 'book',
    year: 2022,
    title:
      'BIM, Smart Construction Objects (SCOs) and Pervasive Technologies Integration',
    authors: ['Jinying XU*', 'Weisheng LU'],
    venue:
      'Research Companion to Building Information Modeling (Edward Elgar Publishing)',
  },
  {
    id: 'b-4',
    kind: 'book',
    year: 2020,
    title:
      'Chapter 15 From Smart Construction objects towards Cognitive FM',
    authors: ['Jinying XU*', 'Weisheng LU', 'Yuhan NIU'],
    venue:
      'Cyber-Physical Systems in the Built Environment (Taylor & Francis)',
    url: 'https://link.springer.com/content/pdf/10.1007/978-3-030-41560-0.pdf',
  },
  {
    id: 'b-3',
    kind: 'book',
    year: 2019,
    title:
      'Chapter 7 Current Challenges and future outlooks',
    authors: ['Jinying XU'],
    venue:
      'BIM and Big Data for Construction Cost Management (Routledge)',
    url: 'https://books.google.co.uk/books?hl=en&lr=&id=uHdyDwAAQBAJ&oi=fnd&pg=PT11',
  },
  {
    id: 'b-2',
    kind: 'book',
    year: 2017,
    title:
      'Design, Construction, and Management of Hospital Reconstruction and Expansion Projects — Sections 1, 2, 5 and 6',
    authors: ['Jinying XU'],
    venue:
      'Tongji University Press (Chinese)',
    url: 'https://www.amazon.com/%E5%8C%BB%E9%99%A2%E6%94%B9%E6%89%A9%E5%BB%BA%E9%A1%B9%E7%9B%AE%E8%AE%BE%E8%AE%A1%E6%96%BD%E5%B7%A5%E5%92%8C%E7%AE%A1%E7%90%86-%E5%8C%BB%E9%99%A2%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%E4%B8%9B%E4%B9%A6-%E5%A4%8D%E6%9D%82%E5%B7%A5%E7%A8%8B%E7%AE%A1%E7%90%86%E4%B9%A6%E7%B3%BB-%E5%8C%BF%E5%90%8D/dp/7560870821',
  },
  {
    id: 'b-1',
    kind: 'book',
    year: 2015,
    title:
      'Hospital Construction Project Management: Government Public Engineering Project Management Reform and Innovation — Chapters 2, 3, and 5',
    authors: ['Jinying XU'],
    venue:
      'Tongji University Press (Chinese)',
    url: 'https://www.amazon.com/%E5%8C%BB%E9%99%A2%E5%BB%BA%E8%AE%BE%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86-%E6%94%BF%E5%BA%9C%E5%85%AC%E5%85%B1%E5%B7%A5%E7%A8%8B%E7%AE%A1%E7%90%86%E6%94%B9%E9%9D%A9%E4%B8%8E%E5%88%9B%E6%96%B0-%E5%8C%BF%E5%90%8D/dp/7560860567',
  },
]


/* ===== Projects (dummy) ===== */
export type Project = {
  slug: string
  title: string
  summary: string
  coverImage?: string
  tags: string[]
  abstract: string
  members: string[]
  grant?: string
  repoUrl?: string
  demoUrl?: string
  paperUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'intelligent-carbon-management', 
    title: 'Data science and digital technologies for intelligent carbon management in the whole life of highway assets',
    summary:
      'Comprehensive carbon data ontology, trustworthy carbon data model, intelligent carbon management system framework, integrated carbon digital twin',
    coverImage: '/projects/intelligent carbon management system framework.png',
    tags: ['Data science', 'Carbon management', 'Digital twin', 'Ontology'],
    abstract:
      'This project develops a standardised data model that can be employed for consistent carbon calculation, assessment, and optimisation by future road developers. A mixed research method with interviews, organisational archival analysis, and ontology modelling is used. Four research objectives are outlined: (1) to review existing carbon management theories and practices, attainable advanced technologies for carbon sensing and monitoring, data analysing, sharing, and visualisation; (2) to develop a standardised data model for carbon management; (3) to develop a set of interoperable protocols for data collection, storage, analysis, sharing, and visualisation; and (4) to prepare the data model in a way that is adaptable to the foreseeable adoption of new technologies in the next five years. A carbon data trustworthy framework and an intelligent carbon data management system architecture are developed. ',
    members: ['Dr. Jinying Xu'],
    grant: 'EU MSCA Future Roads, University of Cambridge (Closing, 2022-2025)',
    demoUrl: 'https://drf.eng.cam.ac.uk/staff/dr-jinying-xu',
    paperUrl: 'https://doi.org/10.1016/j.envsci.2024.103935'
  },
  {
    slug: 'UTS-data-ontology', 
    title: 'Data ontology for climate resilience of urban transportation infrastructure',
    summary: 
      'The core purpose is to address a critical gap in the data management of UTS by leveraging the background projects from two teams. By developing a data ontology, we aim to harmonize the diverse sources of UTS data, providing a common language and structure to enhance data integration and interoperability. This will empower transportation stakeholders to organize data to empower machine learning, AI, and make well-informed decisions for both climate resilience.',
    coverImage: '/projects/UTS resilience ontology.png',
    tags: ['Data ontology', 'urban transportation system', 'climaye resilience'],
    abstract:
      `Urban transportation systems (UTS) play a pivotal role in our society, but its sustainability is increasingly imperiled by the escalating climate crisis. It is paramount to enhance climate resilience of UTS, which heavily relies on data-driven and evidence-based decision-making.

    Transportation data is sourced from a multitude of sensors, devices, and data providers, each utilizing distinct data models and standards. However, with the increasing volume and variety of data about different aspects of the complex UTS, the logical and connecting relationship of the datasets and how they can be put together to make sense of the full-picture situation is unclear. This gap hinders the application of data science, machine learning, and AI in enabling UTS to confront climate crisis. There is an urgent need to harmonize and streamline the data ontology for UTS. A data ontology serves as the foundational framework, defining the semantics and relationships among various transportation-related concepts and entities. It is required for the increasing availability of technology applications to share data. A suitable data ontology can make the inductive leap to understand complex systems through standardized data representation, enhanced data integration, deeper semantic comprehension, and better machine learning.


    Our research project aims to develop a comprehensive data ontology for climate resilience in UTS. It capitalizes on the collective strengths of two research teams from esteemed institutions—Cambridge and Tsinghua. This collaboration combines the edges of Tsinghua's 2-million-yuan NSFC project “Research on the theories and methods for safety and resilience oriented inter-system and inter-dimensional planning of urban infrastructure systems” led by Prof. Dongping Fang and Dr. Nan Li, and a EU MSCA project “Data Science and digital technologies for intelligent carbon management in the whole life of highway assets” led by Dr. Jinying Xu and supervised by Dr. Kristen MacAskill at Cambridge.`, // <--- Closing backtick
    members: ['Dr. Jinying Xu', 'Dr. Kristen MacAskill (Cambridge)', 'Dr. Nan Li (Tsinghua)', 'Mr. Mukun Liu (Tsinghua)'],
    grant: 'Royal Society-NSFC Internatioanl Exchanges (Ongoing, 2024-2026)'
  },
   {
    slug: 'project-cognition', 
    title: 'Digitally Empowered Project Cognition for Sustainability',
    summary:
      'IoT perception + cognitive learning + AI/robotic actuation to optimize efficiency and sustainability.',
    coverImage: '/projects/digitally-empowered-cover.png',
    tags: ['Digitalisation', 'Project management', 'Cognition', 'AI', 'Sustainability'],
    abstract:
      'We envision a future where cognitive technologies empower project teams to build smarter, greener, and more resilient environments—making every project a model of adaptive, data-driven excellence. This interdisciplinary research fuses smart data integration, digital cognition, and automation to optimise decision-making, reduce lifecycle carbon, and enhance the resilience of modern built environments. It includes three key subtopics that are interconnected with each other: (1) Perception: leveraging IoT, sensing technologies, robots, digital systems to collect data to systematically perceive data flow of process, material and carbon, project behaviours, and key performance indicators. (2) Learning: cognitive computing to make sense of project contexts, empower projects with cognition abilities to adapt project processes and structures with modern methods of engineering to enhance key performance indicators regarding cost effectiveness, safety, lean principles, and sustainability. (3) Actuation: Human-AI/Robot augmentation to (semi-)automatically implement optimised activities in dynamic and complex construction environments to improve the efficiency, safety, and sustainability of projects and organisations. The project will advance the cognitive abilities of project management organisations to help achieve lean principles in modern construction engineering.',
    members: ['Dr. Jinying Xu', 'Team'],
    grant: 'NUS Start-Up Grant (Ongoing, 2025-2029), S$500,000',
  },
]

/* ===== Research Overview (from flyer) ===== */
export const researchOverview = {
  tagline: 'Integrated digital technologies and data fusion for project cognition to support lean construction, net-zero carbon management, and climate resilience',
  blurb:
    'An interdisciplinary initiative to enhance project decision-making by mimicking human cognition—optimizing efficiency and sustainability via IoT-based perception, cognitive learning, and AI/robotic actuation.',
  pillars: [
    {
      title: 'Perception',
      description:
        'Leverage IoT, sensing, robots, and digital systems to collect data on process, material/carbon flow, project behaviours, and KPIs.'
    },
    {
      title: 'Learning',
      description:
        'Use cognitive computing and AI to understand project context and adapt processes/structures to improve key performance indicators.'
    },
    {
      title: 'Actuation',
      description:
        'Apply AI and robotic actuation to (semi-)automatically implement optimized activities for efficiency, safety, and sustainability.'
    }
  ]
}

/* ===== About (group + NUS) ===== */
export type About = {
  group: string
  nusNote: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  secondaryImage?: string
  secondaryImageAlt?: string
  secondaryImageCaption?: string
  nusLinkLabel?: string
  nusLinkHref?: string
}

export const about: About = {
  group:
    'Cognition X Lab is based at Department of the Built Environment, College of Design and Engineering, National University of Singapore. The Lab aims to develop cognitive capabilities in construction/engineering project management by integrating data streams from Building Information Modeling (BIM), Internet of Things (IoT), sensors, supply chains, and workflows.\n\n Our mission is to create an intelligent "project brain" using advanced artificial intelligence (AI) to support project teams in optimizing outcomes through material minimization, enhancing process intelligence, and enabling automated system actuation. Dedicated to drive sustainability and resilience, we emphasize lifecycle carbon reduction and adaptive, context-aware infrastructures and buildings by leveraing AI for systems. By bridging digital workflows with real-world data, Cognition X transforms construction sites into smart ecosystems that deliver efficient, human-centered built environments.\n\n Join us as we innovate solutions for the construction challenges of tomorrow, blending cutting-edge technology with sustainability for a transformative impact on infrastructure development.',
  nusNote:
    'NUS is a global top-10 university (QS 2025) with leading rankings in Architecture & Built Environment and Construction Management research.',
  image: '/slogan.png',
  imageAlt: 'Cognition X Lab Research Scope',
  imageCaption: 'Cognition X Lab Vision',
  secondaryImage: '/Lab_Logo_title.png',
  secondaryImageAlt: 'Cognition X Lab',
  secondaryImageCaption: 'Cognition X Lab Logo',
  nusLinkLabel: 'Visit NUS',
  nusLinkHref: 'https://nus.edu.sg',
}

/* ===== Openings (join us) ===== */
export type Opening = {
  id: string
  title: string
  active: boolean
  description: string
  posted: string
  deadline: string
  notes?: string[]
}

export const openings = [
  // ...existing openings...
  {
    id: 'open-phd',
    title: 'PhD Positions (Open)',
    active: true,
    description:
      'Candidates who are good at Building/Infrastructure Informatics,  Data Science, Knowledge Graph, or Ontology Mapping are strongly encouraged to apply',
    posted: 'October 2025',
    deadline: '#',
  },
  // {
  //   id: 'open-postdoc',
  //   title: 'Postdoctoral Researchers (Fall 2025 onwards)',
  //   active: true,
  //   description:
  //     'Self-motivated postdocs with strong research track in IoT/DT/Robotics/AI and project analytics.',
  //   posted: 'September 2025',
  //   deadline: 'November 30, 2025',
  // },
  
  // Past opening example 1
  {
    id: 'rf-intelligent-carbon-management-2025',
    title: 'Research Fellow (Intelligent Carbon Management)',
    description:
      'Research Fellow position (Intelligent Carbon Management). This posting is a past opening; the original job posting is linked.',
    posted: '2025-11-15',
    deadline: '2025-12-31',
    active: false,
    externalUrl:
      'https://careers.nus.edu.sg/job/Research-Fellow-%28Intelligent-Carbon-Management%29/31002-en_GB/',
  },

  // Past opening example 2
  {
    id: 'ra-construction-automation-2025',
    title: 'Research Assistant (Construction automation)',
    description:
      'Research Assistant (Construction automation). This posting is a past opening; the original job posting is linked.',
    posted: '2025-10-15',
    deadline: '2025-11-30',
    active: false,
    externalUrl:
      'https://careers.nus.edu.sg/job/Research-Assistant-%28Construction-automation%29/30800-en_GB/',
  },
]

export const requirements = {
  postdoc: [
    'PhD completed in Built Environment, Engineering, Computer Science, or related field.',
    'Strong track record in research (publications, projects) related to IoT, digital twins, robotics, AI, sustainability (carbon management and infrastructure resilience), or project analytics.',
    'Experience in independent research and mentoring junior team members.',
    'Programming and data analysis skills: Python/R/SQL/Julia; familiarity with Neo4j, DL, ML, NLP, or LLM workflows.',
    'Ability to work collaboratively in a multidisciplinary team and lead research projects.',
    'Open science mindset: reproducible research, documentation, code sharing.'
  ],
  phd: [
    'Master’s or Bachelor’s with first-class honours (or equivalent) in Built Environment, Engineering, Computer Science, or related.',
    'Demonstrated research interest and relevant project experience.',
    'Programming and data skills: Python/R/SQL/Julia; basic ML or data analysis experience.',
    'Ability to work independently and in a collaborative environment.',
    'Strong English communication; TOEFL/IELTS required for non-native speakers.',
    'Commitment to reproducible research and open science.'
  ],
  master: [
    'Bachelor’s in Built Environment, Engineering, Computer Science, or related.',
    'Interest in research and hands-on project work.',
    'Basic programming and data skills (Python/R/SQL).',
    'Ability to follow instructions and contribute to team projects.',
    'Good communication and documentation skills.'
  ],
  undergraduate: [
    'Currently enrolled in a relevant degree program (Built Environment, Engineering, CS, Data Science).',
    'Interest in research, coding, data collection, or literature review.',
    'Basic programming or data skills preferred.',
    'Ability to commit to scheduled lab hours and tasks.',
    'Willingness to learn version control (Git/GitHub) and research workflows.'
  ]
}

export const howToApply = {
  email: 'jinying.xu@nus.edu.sg',
  items: [
    'Curriculum Vitae (CV) including qualifications, research experience, and a full publication list (if applicable).',
    'An initial research proposal (as outlined in the lab manual in \'Resources\' section)',
    'Statement of Purpose (≤ 2 pages) describing your interests, experience, motivation, and alignment with Cognition X lab mission.',
    'Academic transcripts and degree certificates.',
    'Contact information for 2–3 referees familiar with your research or academic work.'
  ],
  note:
    'Please reach out at least 6–8 weeks in advance. Use email subject: [Position]+[Affiliation]+[Full Name].'
}

/* ===== News (for Home) ===== */
export type NewsItem = { id: string, date: string, title: string, href?: string }
export const news: NewsItem[] = [
  { id: 'n1', date: 'Sep 2025', title: '🎉 Dr. Jinying Xu joined NUS Department of the Built Enviornment as an Assistant Professor' },
  { id: 'n2', date: 'Oct 2025', title: '🚀 Cognition X Lab Group\'s website is live.' },
  { id: 'n3', date: '21 Nov 2025', title: '📢 Dr. Jinying Xu delivered a seminar at NUS on “Managing Complexities in Modular Construction and Mega Infrastructure Projects through Digital Technologies: Global Case Insights" (1:00-5:00pm, SDE 4 Level 4 Executive Room ), over 25 Singapore industry professionals actively participated' },
  { id: 'n4', date: '15-16 Dec 2025', title: '📢 Dr. Jinying Xu was invited to the "NCTI-DCHK Conference 2025: Digital Transformation in Construction" and gave an invited talk "Digital-enabled Intelligent Carbon Management System: Key Elements and System Architecture" at the University of Hong Kong in HKSAR' },
  { id: 'n5', date: '17 Dec 2025', title: '📢 Dr. Jinying Xu visted the Department of Architecture and Civil Engineering, City University of Hong Kong.' },
  { id: 'n6', date: '18 Dec 2025', title: '📢 Dr. Jinying Xu gave an invited talk "Digital technologies for intelligent carbon management" at the Department of Building and Real Estate, The Hong Kong Polytechnic University.' },
  { id: 'n7', date: '19 Dec 2025', title: '📢 Dr. Jinying Xu gave an invited seminar "Advancing carbon management with ontology-driven data collection" at the Frontier Forum on Smart Construction and Smart City Research at Huazhong University of Science and Technology.' },
  { id: 'n8', date: '12 Jan 2026', title: '🎉 Welcome Mr. Ruiyan Zheng who joins Cognition X Lab, NUS Department of the Built Enviornment as a Research Engineer/PhD Student.' },
  { id: 'n9', date: '6 Apr 2026', title: '🎉 Welcome Dr. Christoph P. Sydora who joins Cognition X Lab,  NUS Department of the Built Enviornment as a Research Fellow.'},
  { id: 'n10', date: '13 Apr 2026', title: '📢 Cognition X Lab had a sharing session with the Reasonable Design Lab led by Prof Pieter Herthogs from Department of Architecture, NUS'},
  { id: 'n11', date: '26 May 2026', title: '🎉 Welcome Ahad Nardekar and Raquel Jardim who are joining Cognition X Lab,  NUS Department of the Built Enviornment as Undergraduate Summer Students.'},
  { id: 'n12', date: '1 July 2026', title: '🎉 Welcome Dossiya Dakou who is visiting Cognition X Lab,  NUS Department of the Built Enviornment, funded by Mastercard Scholarship.'},
]
export const map = {
  lat: 1.2966,
  lng: 103.7764,
  zoom: 16,
  placeLabel: 'NUS CDE • Dept. of the Built Environment',
}

/* ===== Resources ===== */
export const resources = [
  {
    title: 'Other Materials',
    items: [
      {
        name: 'ROS 2 Beginner Guide',
        type: 'External Link',
        url: 'https://docs.ros.org/en/humble/',
      },
      {
        name: 'Sensor Fusion Code Examples',
        type: 'GitHub Repository',
        url: 'https://github.com/example/sensor-fusion-labs',
      },
    ],
  },
]
