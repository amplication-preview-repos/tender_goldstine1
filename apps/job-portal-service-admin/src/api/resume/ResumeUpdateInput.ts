import { ApplicationUpdateManyWithoutResumesInput } from "./ApplicationUpdateManyWithoutResumesInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResumeUpdateInput = {
  applications?: ApplicationUpdateManyWithoutResumesInput;
  resumeFile?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
