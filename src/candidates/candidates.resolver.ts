import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { LoginService } from "src/login/login.service";
import { LoginModel } from "src/login/model/login.model";
import { CandidatesService } from "./candidates.service";
import { CandidateCreateInput } from "./dto/candidate.create.input";
import { CandidateUpdateInput } from "./dto/candidate.update.input";
import { CandidateModel } from "./model/candidate.model";

@Resolver(() => CandidateModel)
export class CandidatesResolver {
    constructor( 
        private readonly candidatesService: CandidatesService,
        private readonly loginService: LoginService,
    ) {}

    // QUERIES
    @Query(() => [CandidateModel])
    async getCandidates() {
        return await this.candidatesService.getCandidates();
    }

    @Query(() => CandidateModel)
    async getCandidateByid( @Args('candidateNo') candidateNo: string) {
        return await this.candidatesService.getCandidateByid(candidateNo);
    }

    // RESOLVE NESTED QUERY
    @ResolveField(() => LoginModel)
    async login(@Parent() candidate: CandidateModel): Promise<LoginModel> {
        return await this.loginService.getLoginData(candidate.email);
    }

    // MUTATION
    @Mutation(() => CandidateModel)
    async createCandidate( @Args('createCandidateInput') createCandidateInput: CandidateCreateInput) {
        return await this.candidatesService.createCandidate(createCandidateInput);
    }

    @Mutation(() => CandidateModel)
    async deleteCandidate( @Args('candidateNo') candidateNo: string) {
        return await this.candidatesService.deleteCandidate(candidateNo);
    }

    @Mutation(() => CandidateModel)
    async updateCandidate( @Args('updateCandidateInput') updateCandidateInput: CandidateUpdateInput) {
        return await this.candidatesService.updateCandidate(updateCandidateInput);
    }
} 