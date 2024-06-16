import { ApplicationUpdateManyWithoutUsersInput } from "./ApplicationUpdateManyWithoutUsersInput";
import { ResumeUpdateManyWithoutUsersInput } from "./ResumeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  applications?: ApplicationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  resumes?: ResumeUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
