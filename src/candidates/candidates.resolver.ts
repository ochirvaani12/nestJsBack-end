import { Resolver, Query, Args, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { LoginModel } from "src/login/model/login.model";
import { CandidatesService } from "./candidates.service";
import { CandidateCreateInput } from "./dto/candidate.create.input";
import { CandidateUpdateInput } from "./dto/candidate.update.input";
import { CandidateModel } from "./model/candidate.model";

@Resolver()
export class CandidatesResolver {
    constructor( private readonly candidatesService: CandidatesService ) {}

    // QUERIES
    @Query(() => [CandidateModel])
    async getCandidates() {
        return await this.candidatesService.getCandidates();
    }

    @Query(() => CandidateModel)
    async getCandidateByid( @Args('candidateNo') candidateNo: string) {
        return await this.candidatesService.getCandidateByid(candidateNo);
    }

    @Query(() => CandidateModel)
    async getCandidateByEmail( @Args('email') email: string) {
        return await this.candidatesService.getCandidateByEmail(email);
    }

    // NESTED RESOLVER QUERY
    @ResolveField(() => LoginModel)
    async getLoginData(@Parent() candidate: CandidateModel) {
        return await this.candidatesService.getLoginData(candidate.email);
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