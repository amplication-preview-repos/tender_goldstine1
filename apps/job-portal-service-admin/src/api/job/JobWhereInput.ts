import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobWhereInput = {
  applicationDeadline?: DateTimeNullableFilter;
  applications?: ApplicationListRelationFilter;
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  jobDescription?: StringNullableFilter;
  jobTitle?: StringNullableFilter;
};
