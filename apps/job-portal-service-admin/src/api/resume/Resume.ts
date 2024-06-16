import { Application } from "../application/Application";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Resume = {
  applications?: Array<Application>;
  createdAt: Date;
  id: string;
  resumeFile: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
