export interface CVData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experiences: { job: string; company: string; years: string; }[];
  education: { degree: string; school: string; years: string; }[];
}
