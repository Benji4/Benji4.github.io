// All CV content lives here. Edit this file to update the CV page.
// Plain strings only; the page handles layout and print styling.

export interface Link {
  label: string;
  href: string;
}

export interface Entry {
  title: string; // role or degree
  org: string; // company or school, with city
  dates: string;
  summary?: string; // one-line context under the heading
  groups?: { label?: string; items: string[] }[]; // bullet lists, optionally per client
  stack?: string;
  links?: Link[];
}

export const profile = {
  name: 'Bennet Breier',
  headline: 'Data and AI Architect · Palantir Foundry · GenAI in Financial Services',
  location: 'Bern, Switzerland',
  email: 'bennetbreier@gmail.com',
  photo: '/images/bennet.jpg',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bennet-breier' },
    { label: 'GitHub', href: 'https://github.com/Benji4' },
    { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/3692004/benji' },
  ] satisfies Link[],
  summary: [
    'Data architect and engineer with 5+ years of experience designing data platforms for large financial-services clients in Switzerland and Germany. Specialised in Palantir Foundry, on which I shaped governance for a 7,500-user platform, built an enterprise master-data hub for ESG data, and laid the technical foundation for production GenAI use cases in insurance.',
    'MSc in AI (Distinction, Edinburgh) and double BSc from TU Munich (Informatics, Business Administration), linking architectural decisions to both technical constraints and business value.',
  ],
};

export const certifications: Link[] = [
  { label: 'Palantir Foundry Solution Architect', href: '' },
  { label: 'Google Cloud Professional Cloud Architect', href: '' },
];

export const competencies: { area: string; items: string }[] = [
  {
    area: 'Data architecture',
    items:
      'Solution and platform architecture, data governance and access control, master data management and entity resolution, data integration across internal and third-party sources, data modelling',
  },
  {
    area: 'Platforms and cloud',
    items:
      'Palantir Foundry (advanced, including Foundry AIP), Google Cloud Platform, PySpark, Python, SQL / NoSQL, Java, FastAPI, Git',
  },
  {
    area: 'AI and GenAI',
    items:
      'Architecture and review of LLM solutions (underwriting, claims), machine learning, computer vision, document extraction (OCR), PyTorch, SciPy, pandas',
  },
  {
    area: 'Consulting',
    items:
      'Stakeholder advisory, technical reviews, training and enablement of engineering teams, Power BI dashboards',
  },
];

export const experience: Entry[] = [
  {
    title: 'Data Engineer – Foundry Solution Architecture',
    org: 'Unit8 SA, Zurich',
    dates: 'Jan 2023 – Jun 2026',
    summary: 'Data and AI consultancy; placed with major Swiss financial-services clients.',
    groups: [
      {
        label: 'Large Swiss reinsurer',
        items: [
          'Advised the platform team on best practices in release management, data sharing, data quality, metadata management, data ownership, and governance on their platform of 7,500 active users.',
          'Took 3 underwriting solutions built with Foundry AIP and Workshop from proof of concept to production in a highly agile environment, reaching up to 300 active users; restructured the production data model around user needs.',
          'Simplified the pipeline and Ontology data model behind a dashboard with 150 users for analyzing and managing the growth strategy of large accounts in the Credit & Surety business.',
          'Added new features to a central governance tool with over 400 regular users, giving application owners and platform administrators control over end-to-end data flow, health status, access rights, and support requests drawing on multiple data sources.',
        ],
      },
      {
        label: 'Large Swiss bank',
        items: [
          'Established a central hub for curated data from several ESG data providers (MSCI, Sustainalytics, etc.), for distribution across the bank.',
          'Implemented a pipeline for resolving company IDs across several data providers, matching a new unique ID with internal IDs from the client.',
        ],
      },
    ],
    stack: 'Palantir Foundry, PySpark, Python, TypeScript, SQL, Atlassian',
  },
  {
    title: 'Analytics Professional',
    org: 'Deloitte, Düsseldorf',
    dates: 'Jan 2020 – Sep 2021',
    summary: 'Analytics Journey traineeship, rotating through all five business units.',
    groups: [
      {
        items: [
          'Developed an AI solution extracting data from hard-copy tax notices, plus an administration tool for the internal post office.',
          'Built and presented a regression model predicting sales ratios for a nicotine-products manufacturer to optimise its distribution channels.',
          "Built an interactive dashboard supporting a consumer-goods firm's sales negotiations with German retailers.",
          'Advised a large German manufacturer in setting up a Center of Excellence for process and task mining.',
        ],
      },
    ],
    stack: 'Python (SciPy stack), Power BI, MS SQL, Angular, ASP.NET, ABBYY, Git',
  },
  {
    title: 'IT Consulting Intern',
    org: 'Senacor Technologies AG, Munich',
    dates: 'Apr – Jun 2018',
    groups: [
      {
        items: [
          "Supported program management in setting up and running global IT systems for a large German car maker's customer ecosystem.",
        ],
      },
    ],
  },
];

export const research: Entry[] = [
  {
    title: 'Research Intern',
    org: 'Computational Neuroscience Lab, University of Bern',
    dates: 'Jul – Dec 2022',
    groups: [
      {
        items: [
          'Investigated a new class of biologically plausible neural networks that enable memory tasks (Python, NumPy).',
        ],
      },
    ],
  },
  {
    title: 'External Collaborator',
    org: 'BCN-AIM, University of Barcelona (remote)',
    dates: 'Nov 2021 – Jun 2022',
    groups: [
      {
        items: [
          'Improved CNN and Transformer performance on mammography classification using GAN-generated synthetic images, a privacy-preserving alternative to sharing patient data (PyTorch).',
        ],
      },
    ],
  },
];

export const education: Entry[] = [
  {
    title: 'MSc Artificial Intelligence',
    org: 'The University of Edinburgh',
    dates: 'Sep 2018 – Aug 2019',
    groups: [
      {
        items: [
          'Graduated with Distinction (78%). Thesis on feature learning in CNNs on video recordings of zebrafish; published at ICLR 2020.',
        ],
      },
    ],
    links: [{ label: 'Thesis code', href: 'https://github.com/Benji4/zebrafish-learning' }],
  },
  {
    title: 'BSc Informatics and BSc Business Administration',
    org: 'Technical University of Munich',
    dates: 'Oct 2013 – Aug 2018',
    groups: [
      {
        items: [
          'Two parallel degrees. Informatics: grade 1.6, thesis on the technical analysis of the IOTA Tangle. Business Administration: grade 1.8, thesis on integer programs for vehicle relocation in one-way car sharing (Java).',
          'Exchange semesters at Hong Kong Baptist University (2015) and IIT Bombay (2016).',
          'Scholarships: DAAD, Deutschlandstipendium, BayIND, e-fellows.net.',
        ],
      },
    ],
  },
];

export const publications: { title: string; venue: string; href: string }[] = [
  {
    title:
      'Sharing Generative Models Instead of Private Data: A Simulation Study on Mammography Patch Classification',
    venue: 'IWBI 2022',
    href: 'https://doi.org/10.1117/12.2625781',
  },
  {
    title:
      'Analysis of Video Feature Learning in Two-Stream CNNs on the Example of Zebrafish Swim Bout Classification',
    venue: 'ICLR 2020',
    href: 'https://iclr.cc/virtual_2020/poster_rJgQkT4twH.html',
  },
];

export const languages =
  'German (native) · English (fluent, TOEFL 118/120) · Spanish (intermediate) · French (beginner, learning)';

export const personal = {
  text: 'Based in Bern. Interests: music (singing, guitar, piano), yoga, hiking, alpinism, running, skiing.',
  links: [
    { label: '“BenJi Breier” on Spotify', href: 'https://open.spotify.com/artist/3uh1WWJ7Alz4hEIMlL8ve2' },
  ] satisfies Link[],
};

export const footnote = 'Grades on the German scale: 1.0 best, 5.0 lowest.';
