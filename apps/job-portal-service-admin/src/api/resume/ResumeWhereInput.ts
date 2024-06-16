import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResumeWhereInput = {
  applications?: ApplicationListRelationFilter;
  id?: StringFilter;
  resumeFile?: JsonFilter;
  user?: UserWhereUniqueInput;
};
