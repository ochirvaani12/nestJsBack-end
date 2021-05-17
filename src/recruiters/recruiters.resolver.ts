import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { LoginService } from "src/login/login.service";
import { LoginModel } from "src/login/model/login.model";
import { RecruiterCreateInput } from "./dto/recruiter.create.input";
import { RecruiterUpdateInput } from "./dto/recruiter.update.input";
import { RecruiterModel } from "./model/recruiter.model";
import { RecruitersService } from "./recruiters.service";

@Resolver(() => RecruiterModel)
export class RecruitersResolver {
    constructor(
        private readonly recruiterService: RecruitersService,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    @Query(() => [RecruiterModel])
    async getRecruiters() {
        return await this.recruiterService.getRecruiters();
    }

    @Query(() => RecruiterModel)
    async getRecruiter(@Args('recruiterNo') recruiterNo: string) {
        return await this.recruiterService.getRecruiter(recruiterNo);
    }

    // NESTER RESOLVER QUERY
    @ResolveField(() => RecruiterModel)
    async createdBy(@Parent() recruiter: RecruiterModel) {
        return await this.recruiterService.getRecruiter(recruiter.createdByID);
    }

    @ResolveField(() => LoginModel)
    async login(@Parent() candidate: RecruiterModel): Promise<LoginModel> {
        return await this.loginService.getLoginDataRecruiter(candidate.email);
    }

    // MUTATIONS
    @Mutation(() => RecruiterModel)
    async createRecruiter(@Args('recruiterCreateInput') recruiterCreateInput: RecruiterCreateInput) {
        return await this.recruiterService.createRecruiter(recruiterCreateInput);
    }

    @Mutation(() => RecruiterModel)
    async deleteRecruiter(@Args('recruiterNo') recruiterNo: string) {
        return await this.recruiterService.deleteRecruiter(recruiterNo);
    }

    @Mutation(() => RecruiterModel)
    async updateRecruiter(@Args('recruiterUpdateInput') recruiterUpdateInput: RecruiterUpdateInput) {
        return await this.recruiterService.updateRecruiter(recruiterUpdateInput);
    }
}