import { Job } from "../job/Job";
import { Resume } from "../resume/Resume";
import { User } from "../user/User";

export type Application = {
  applicationDate: Date | null;
  createdAt: Date;
  id: string;
  job?: Job | null;
  resume?: Resume | null;
  updatedAt: Date;
  user?: User | null;
};
