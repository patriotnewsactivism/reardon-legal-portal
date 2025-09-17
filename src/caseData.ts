export interface CaseEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  category: string;
}

export interface EvidenceItem {
  id: number;
  title: string;
  type: string;
  date: string;
  description: string;
  relevance: string;
  source: string;
}

export interface Entity {
  id: number;
  name: string;
  type: string;
  role: string;
  description: string;
}

export interface Document {
  id: number;
  title: string;
  type: string;
  date: string;
  court: string;
  summary: string;
}

export interface LegalIssue {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
}

export const events: CaseEvent[] = [
  {
    id: 1,
    date: "2025-01-21",
    title: "Judicial Order Vacating Prison Sentence",
    description: "Federal court vacated Matthew Reardon's prison sentence on First Amendment grounds.",
    location: "Oxford, MS",
    category: "Legal Victory"
  },
  {
    id: 2,
    date: "2025-03-14",
    title: "FOIA Request Denial",
    description: "Federal agencies denied FOIA requests regarding coordination in Reardon's case.",
    location: "Washington, DC",
    category: "FOIA Issue"
  },
  {
    id: 3,
    date: "2025-05-27",
    title: "Motion to Dismiss Filed",
    description: "Motion to dismiss Bill of Information filed on First Amendment grounds.",
    location: "Lafayette, LA",
    category: "Legal Filing"
  },
  {
    id: 4,
    date: "2025-07-01",
    title: "Demand for Correction",
    description: "Formal demand sent to Oxford Eagle for correction of false reporting.",
    location: "Oxford, MS",
    category: "Media Correction"
  },
  {
    id: 5,
    date: "2025-09-16",
    title: "New Charges Filed",
    description: "Western District of Louisiana filed new charges against Reardon.",
    location: "Lafayette, LA",
    category: "New Charges"
  }
];

export const evidence: EvidenceItem[] = [
  {
    id: 1,
    title: "First Amendment Violation Documentation",
    type: "Legal Document",
    date: "2025-01-21",
    description: "Documentation showing how charges violate First Amendment rights",
    relevance: "Critical",
    source: "Federal Court Records"
  },
  {
    id: 2,
    title: "FOIA Request Correspondence",
    type: "Correspondence",
    date: "2025-03-14",
    description: "Email and letter exchanges regarding denied FOIA requests",
    relevance: "High",
    source: "Federal Agencies"
  },
  {
    id: 3,
    title: "Media Misreporting Evidence",
    type: "News Article",
    date: "2025-07-01",
    description: "Evidence of false reporting by local media outlets",
    relevance: "Medium",
    source: "Oxford Eagle"
  },
  {
    id: 4,
    title: "Federal Coordination Emails",
    type: "Email Evidence",
    date: "2025-05-27",
    description: "Internal communications showing federal coordination",
    relevance: "Critical",
    source: "DOJ/FBI"
  },
  {
    id: 5,
    title: "Fabricated Charges Documentation",
    type: "Legal Analysis",
    date: "2025-09-16",
    description: "Analysis showing charges are fabricated and retaliatory",
    relevance: "Critical",
    source: "Legal Expert Analysis"
  }
];

export const entities: Entity[] = [
  {
    id: 1,
    name: "Matthew Reardon",
    type: "Defendant",
    role: "Journalist and First Amendment Advocate",
    description: "Subject of the legal case, facing retaliatory prosecution"
  },
  {
    id: 2,
    name: "Western District of Louisiana",
    type: "Court",
    role: "Prosecuting Jurisdiction",
    description: "Federal court handling the case"
  },
  {
    id: 3,
    name: "Oxford Eagle",
    type: "Media",
    role: "Local Newspaper",
    description: "Local media outlet accused of false reporting"
  },
  {
    id: 4,
    name: "DOJ/FBI",
    type: "Federal Agency",
    role: "Investigating Agency",
    description: "Federal agencies involved in coordination"
  },
  {
    id: 5,
    name: "First Amendment Lawyers",
    type: "Legal Team",
    role: "Defense Counsel",
    description: "Legal team representing Matthew Reardon"
  }
];

export const documents: Document[] = [
  {
    id: 1,
    title: "Motion to Vacate Sentence",
    type: "Legal Motion",
    date: "2025-01-21",
    court: "Federal Court",
    summary: "Motion successfully vacating prison sentence on First Amendment grounds"
  },
  {
    id: 2,
    title: "FOIA Denial Response",
    type: "Government Response",
    date: "2025-03-14",
    court: "Federal Agencies",
    summary: "Denial of FOIA requests regarding federal coordination"
  },
  {
    id: 3,
    title: "Motion to Dismiss Bill of Information",
    type: "Legal Motion",
    date: "2025-05-27",
    court: "Western District of Louisiana",
    summary: "Motion to dismiss charges on First Amendment grounds"
  },
  {
    id: 4,
    title: "Demand for Correction",
    type: "Legal Correspondence",
    date: "2025-07-01",
    court: "Oxford Eagle",
    summary: "Formal demand for correction of false media reporting"
  },
  {
    id: 5,
    title: "New Bill of Information",
    type: "Legal Document",
    date: "2025-09-16",
    court: "Western District of Louisiana",
    summary: "New charges filed against Matthew Reardon"
  }
];

export const legalIssues: LegalIssue[] = [
  {
    id: 1,
    title: "First Amendment Retaliation",
    description: "Claims that prosecution is retaliation for protected speech activities",
    status: "Active",
    priority: "Critical"
  },
  {
    id: 2,
    title: "FOIA Violations",
    description: "Denial of legitimate Freedom of Information Act requests",
    status: "Active",
    priority: "High"
  },
  {
    id: 3,
    title: "Fabricated Charges",
    description: "Allegations that charges are fabricated and without merit",
    status: "Active",
    priority: "Critical"
  },
  {
    id: 4,
    title: "Federal Coordination",
    description: "Evidence of improper coordination between federal agencies",
    status: "Under Investigation",
    priority: "High"
  },
  {
    id: 5,
    title: "Mental Health Abuse",
    description: "Allegations of abuse in mental health commitment process",
    status: "Active",
    priority: "Medium"
  }
];