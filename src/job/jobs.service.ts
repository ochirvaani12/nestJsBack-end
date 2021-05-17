import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JobCreateInput } from "./dto/job.create.input";
import { JobUpdateInput } from "./dto/job.update.input";
import { JobEntity } from "./model/job.entity";
import { JobModel } from "./model/job.model";

@Injectable()
export class JobsService {
    constructor(@InjectRepository(JobEntity) private jobRepository: Repository<JobEntity>) {}

    // QUERIES
    async getJobs(): Promise<JobModel[]> {
        return await this.jobRepository.find({});
    }

    async getJob(jobNo: string): Promise<JobModel> {
        return await this.jobRepository.findOneOrFail({jobNo: jobNo});
    }

    // MUTATION
    async createJob(jobCreateInput: JobCreateInput): Promise<JobModel> {
        return await this.jobRepository.save(jobCreateInput);
    }

    async deleteJob(jobNo: string): Promise<JobModel> {
        const job = await this.jobRepository.findOneOrFail({jobNo: jobNo});
        this.jobRepository.remove(job);
        return job;
    }

    async updateJob(jobUpdateInput: JobUpdateInput): Promise<JobModel> {
        const job = await this.jobRepository.findOneOrFail({jobNo: jobUpdateInput.jobNo});
        if(job){
            const updatedCandidate = this.jobRepository.create(jobUpdateInput);
            return await this.jobRepository.save(updatedCandidate);
        }
    }
}