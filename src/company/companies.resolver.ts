import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { RecruiterModel } from "src/recruiters/model/recruiter.model";
import { RecruitersService } from "src/recruiters/recruiters.service";
import { CompaniesService } from "./companies.service";
import { CompanyCreateInput } from "./dto/company.create.input";
import { CompanyUpdateInput } from "./dto/company.update.input";
import { CompanyModel } from "./model/company.model";

@Resolver(() => CompanyModel)
export class CompaniesResolver {
    constructor( 
        private readonly companiesService: CompaniesService,
        private readonly recruitersService: RecruitersService
    ) {}

    // QUERIES
    @Query(() => [CompanyModel])
    async getCompanies() {
        return await this.companiesService.getCompanies();
    }

    @Query(() => CompanyModel)
    async getCompany(@Args('companyNo') companyNo: string) {
        return await this.companiesService.getCompany(companyNo);
    }

    // NESTED QUERY RESOLVER
    @ResolveField(() => RecruiterModel)
    async recruiter(@Parent() company: CompanyModel) {
        return await this.recruitersService.getRecruiter(company.recruiterNo);
    }

    // MUTATIONS
    @Mutation(() => CompanyModel)
    async createCompany(@Args('companyCreateInput') companyCreateInput: CompanyCreateInput) {
        return await this.companiesService.createCompany(companyCreateInput);
    }

    @Mutation(() => CompanyModel)
    async deleteCompany(@Args('companyNo') companyNo: string) {
        return await this.companiesService.deleteCompany(companyNo);
    }

    @Mutation(() => CompanyModel)
    async updateCompany(@Args('companyUpdateInput') companyUpdateInput: CompanyUpdateInput) {
        return await this.companiesService.updateCompany(companyUpdateInput);
    }
}