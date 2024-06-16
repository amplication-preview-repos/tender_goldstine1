/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Application as PrismaApplication,
  Job as PrismaJob,
  Resume as PrismaResume,
  User as PrismaUser,
} from "@prisma/client";

export class ApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ApplicationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.application.count(args);
  }

  async applications<T extends Prisma.ApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationFindManyArgs>
  ): Promise<PrismaApplication[]> {
    return this.prisma.application.findMany<Prisma.ApplicationFindManyArgs>(
      args
    );
  }
  async application<T extends Prisma.ApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationFindUniqueArgs>
  ): Promise<PrismaApplication | null> {
    return this.prisma.application.findUnique(args);
  }
  async createApplication<T extends Prisma.ApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationCreateArgs>
  ): Promise<PrismaApplication> {
    return this.prisma.application.create<T>(args);
  }
  async updateApplication<T extends Prisma.ApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationUpdateArgs>
  ): Promise<PrismaApplication> {
    return this.prisma.application.update<T>(args);
  }
  async deleteApplication<T extends Prisma.ApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApplicationDeleteArgs>
  ): Promise<PrismaApplication> {
    return this.prisma.application.delete(args);
  }

  async getJob(parentId: string): Promise<PrismaJob | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .job();
  }

  async getResume(parentId: string): Promise<PrismaResume | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .resume();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.application
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
