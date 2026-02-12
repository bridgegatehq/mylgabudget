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

export const ELECTION_YEARS = [2023, 2027, 2031, 2035, 2039, 2043] as const;

export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
  "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
  "FCT"
] as const;
