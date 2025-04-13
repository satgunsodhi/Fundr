export interface Project {
  id: string;
  companyName: string;
  productName?: string;
  description: string;
  timeline?: string;
  deadline?: string;
  rewards?: string;
  goal: number;
  currentAmount: number;
  photoLink: string;
}