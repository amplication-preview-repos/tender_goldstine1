import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type CompanyWhereInput = {
  companyDescription?: StringNullableFilter;
  companyName?: StringNullableFilter;
  id?: StringFilter;
  jobs?: JobListRelationFilter;
  website?: StringNullableFilter;
};
