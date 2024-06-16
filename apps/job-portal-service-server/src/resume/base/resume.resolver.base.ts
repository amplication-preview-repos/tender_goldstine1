/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Resume } from "./Resume";
import { ResumeCountArgs } from "./ResumeCountArgs";
import { ResumeFindManyArgs } from "./ResumeFindManyArgs";
import { ResumeFindUniqueArgs } from "./ResumeFindUniqueArgs";
import { CreateResumeArgs } from "./CreateResumeArgs";
import { UpdateResumeArgs } from "./UpdateResumeArgs";
import { DeleteResumeArgs } from "./DeleteResumeArgs";
import { ApplicationFindManyArgs } from "../../application/base/ApplicationFindManyArgs";
import { Application } from "../../application/base/Application";
import { User } from "../../user/base/User";
import { ResumeService } from "../resume.service";
@graphql.Resolver(() => Resume)
export class ResumeResolverBase {
  constructor(protected readonly service: ResumeService) {}

  async _resumesMeta(
    @graphql.Args() args: ResumeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Resume])
  async resumes(@graphql.Args() args: ResumeFindManyArgs): Promise<Resume[]> {
    return this.service.resumes(args);
  }

  @graphql.Query(() => Resume, { nullable: true })
  async resume(
    @graphql.Args() args: ResumeFindUniqueArgs
  ): Promise<Resume | null> {
    const result = await this.service.resume(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Resume)
  async createResume(@graphql.Args() args: CreateResumeArgs): Promise<Resume> {
    return await this.service.createResume({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Resume)
  async updateResume(
    @graphql.Args() args: UpdateResumeArgs
  ): Promise<Resume | null> {
    try {
      return await this.service.updateResume({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Resume)
  async deleteResume(
    @graphql.Args() args: DeleteResumeArgs
  ): Promise<Resume | null> {
    try {
      return await this.service.deleteResume(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Application], { name: "applications" })
  async findApplications(
    @graphql.Parent() parent: Resume,
    @graphql.Args() args: ApplicationFindManyArgs
  ): Promise<Application[]> {
    const results = await this.service.findApplications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Resume): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
