import { Job } from "../job/Job";

export type Company = {
  companyDescription: string | null;
  companyName: string | null;
  createdAt: Date;
  id: string;
  jobs?: Array<Job>;
  updatedAt: Date;
  website: string | null;
};
