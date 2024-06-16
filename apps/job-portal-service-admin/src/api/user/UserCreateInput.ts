import { ApplicationCreateNestedManyWithoutUsersInput } from "./ApplicationCreateNestedManyWithoutUsersInput";
import { ResumeCreateNestedManyWithoutUsersInput } from "./ResumeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  resumes?: ResumeCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
