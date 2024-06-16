import { ApplicationCreateNestedManyWithoutResumesInput } from "./ApplicationCreateNestedManyWithoutResumesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResumeCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutResumesInput;
  resumeFile?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
