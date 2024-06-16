import { Application } from "../application/Application";
import { Resume } from "../resume/Resume";
import { JsonValue } from "type-fest";

export type User = {
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  resumes?: Array<Resume>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
