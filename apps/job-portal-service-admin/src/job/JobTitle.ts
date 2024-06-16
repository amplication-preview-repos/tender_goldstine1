import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "jobTitle";

export const JobTitle = (record: TJob): string => {
  return record.jobTitle?.toString() || String(record.id);
};
