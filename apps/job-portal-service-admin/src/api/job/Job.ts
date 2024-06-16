import { Application } from "../application/Application";
import { Company } from "../company/Company";

export type Job = {
  applicationDeadline: Date | null;
  applications?: Array<Application>;
  company?: Company | null;
  createdAt: Date;
  id: string;
  jobDescription: string | null;
  jobTitle: string | null;
  updatedAt: Date;
};
