import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CandidateCreateInput } from "./dto/candidate.create.input";
import { CandidateUpdateInput } from "./dto/candidate.update.input";
import { CandidateEntity } from "./model/candidate.entity";
import { CandidateModel } from "./model/candidate.model";

@Injectable()
export class CandidatesService {
    constructor (
        @InjectRepository(CandidateEntity) private candidatesRepository: Repository<CandidateEntity>,
    ) {}

    // QUERIES
    async getCandidates(): Promise<CandidateModel[]> {
        return await this.candidatesRepository.find({});
    }

    async getCandidateByid(candidateNo: string): Promise<CandidateModel> {
        return await this.candidatesRepository.findOneOrFail({candidateNo: candidateNo});
    }


    // MUTATION
    async createCandidate(candidate: CandidateCreateInput): Promise<CandidateModel> {
        const validation = await this.candidatesRepository.findOne({email: candidate.email});
        if(validation){
            throw new Error('email is already registered!')
        } else return await this.candidatesRepository.save(candidate);
    }

    async deleteCandidate(candidateNo: string): Promise<CandidateModel> {
        const candidate = await this.candidatesRepository.findOne({candidateNo: candidateNo});
        if(candidate){
            this.candidatesRepository.remove(candidate);
            return candidate;
        } else throw new Error('Candidate is not found!')
    }

    async updateCandidate(candidate: CandidateUpdateInput): Promise<CandidateModel> {
        const updateCandidate = await this.candidatesRepository.findOne({candidateNo: candidate.candidateNo});
        if(updateCandidate){
            const updatedCandidate = this.candidatesRepository.create(candidate);
            return await this.candidatesRepository.save(updatedCandidate);
        } else throw new Error('Candidate is not found!')
    }
}