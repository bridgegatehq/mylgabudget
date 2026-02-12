export interface Candidate {
  id: string;
  name: string;
  age: number;
  gender: string;
  position: "Governor" | "Deputy Governor";
  image: string;
  profileUrl: string;
}

export interface PartyTicket {
  id: string;
  party: string;
  partyLogo: string;
  isWinner: boolean;
  candidates: Candidate[];
}

export interface ElectionData {
  year: number;
  state: string;
  electionType: string;
  parties: PartyTicket[];
}

export type ElectionTab = "upcoming" | "candidates" | "past";

export interface BudgetOfficer {
  name: string;
  position: string;
  party: string;
  image: string;
  startDate?: string;
}

export interface BudgetSector {
  id: number;
  name: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface BudgetExpense {
  id: number;
  sector: string;
  amount: number;
  percentage: number;
  note: string;
}

export interface TrendData {
  month: string;
  "2025": number;
  "2024": number;
}

export interface BudgetData {
  state: string;
  lga: string;
  year: number;
  totalBudget: number;
  governor: BudgetOfficer;
  lgChairman: BudgetOfficer;
  sectors: BudgetSector[];
  expenses: BudgetExpense[];
  trendData: TrendData[];
  documents: { name: string; size: string; url: string }[];
}

