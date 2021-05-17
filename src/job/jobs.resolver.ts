import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { CompaniesService } from "src/company/companies.service";
import { CompanyModel } from "src/company/model/company.model";
import { RecruiterModel } from "src/recruiters/model/recruiter.model";
import { RecruitersService } from "src/recruiters/recruiters.service";
import { JobCreateInput } from "./dto/job.create.input";
import { JobUpdateInput } from "./dto/job.update.input";
import { JobsService } from "./jobs.service";
import { JobModel } from "./model/job.model";

@Resolver(() => JobModel)
export class JobsResolver {
    constructor( 
        private readonly jobsService: JobsService,
        private readonly recruitersService: RecruitersService,
        private readonly companiesService: CompaniesService
    ) {}

    // QUERY
    @Query(() => [JobModel])
    async getJobs() {
        return await this.jobsService.getJobs();
    }

    @Query(() => JobModel)
    async getJob(@Args('jobNo') jobNo: string) {
        return await this.jobsService.getJob(jobNo);
    }

    // NESTED QUERY RESOLVER
    @ResolveField(() => RecruiterModel)
    async recruiter(@Parent() job: JobModel) {
        return await this.recruitersService.getRecruiter(job.recruiterNo);
    }

    @ResolveField(() => CompanyModel)
    async company(@Parent() job: JobModel) {
        return await this.companiesService.getCompany(job.companyNo);
    }

    // MUTATIONS
    @Mutation(() => JobModel)
    async createJob(@Args('jobCreateInput') jobCreateInput: JobCreateInput) {
        return await this.jobsService.createJob(jobCreateInput);
    }

    @Mutation(() => JobModel)
    async deleteJob(@Args('jobNo') jobNo: string) {
        return await this.jobsService.deleteJob(jobNo);
    }

    @Mutation(() => JobModel)
    async updateJob(@Args('jobUpdateInput') jobUpdateInput: JobUpdateInput) {
        return await this.jobsService.updateJob(jobUpdateInput);
    }
}