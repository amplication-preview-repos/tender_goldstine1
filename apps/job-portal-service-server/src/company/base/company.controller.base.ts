/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CompanyService } from "../company.service";
import { CompanyCreateInput } from "./CompanyCreateInput";
import { Company } from "./Company";
import { CompanyFindManyArgs } from "./CompanyFindManyArgs";
import { CompanyWhereUniqueInput } from "./CompanyWhereUniqueInput";
import { CompanyUpdateInput } from "./CompanyUpdateInput";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";

export class CompanyControllerBase {
  constructor(protected readonly service: CompanyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Company })
  async createCompany(
    @common.Body() data: CompanyCreateInput
  ): Promise<Company> {
    return await this.service.createCompany({
      data: data,
      select: {
        companyDescription: true,
        companyName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Company] })
  @ApiNestedQuery(CompanyFindManyArgs)
  async companies(@common.Req() request: Request): Promise<Company[]> {
    const args = plainToClass(CompanyFindManyArgs, request.query);
    return this.service.companies({
      ...args,
      select: {
        companyDescription: true,
        companyName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        website: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async company(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    const result = await this.service.company({
      where: params,
      select: {
        companyDescription: true,
        companyName: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        website: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompany(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() data: CompanyUpdateInput
  ): Promise<Company | null> {
    try {
      return await this.service.updateCompany({
        where: params,
        data: data,
        select: {
          companyDescription: true,
          companyName: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Company })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompany(
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Company | null> {
    try {
      return await this.service.deleteCompany({
        where: params,
        select: {
          companyDescription: true,
          companyName: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          website: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/jobs")
  @ApiNestedQuery(JobFindManyArgs)
  async findJobs(
    @common.Req() request: Request,
    @common.Param() params: CompanyWhereUniqueInput
  ): Promise<Job[]> {
    const query = plainToClass(JobFindManyArgs, request.query);
    const results = await this.service.findJobs(params.id, {
      ...query,
      select: {
        applicationDeadline: true,

        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        jobDescription: true,
        jobTitle: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobs")
  async connectJobs(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        connect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobs")
  async updateJobs(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        set: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobs")
  async disconnectJobs(
    @common.Param() params: CompanyWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        disconnect: body,
      },
    };
    await this.service.updateCompany({
      where: params,
      data,
      select: { id: true },
    });
  }
}
