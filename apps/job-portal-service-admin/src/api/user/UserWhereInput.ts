import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResumeListRelationFilter } from "../resume/ResumeListRelationFilter";

export type UserWhereInput = {
  applications?: ApplicationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  resumes?: ResumeListRelationFilter;
  username?: StringFilter;
};
