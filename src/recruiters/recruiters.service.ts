import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RecruiterCreateInput } from "./dto/recruiter.create.input";
import { RecruiterUpdateInput } from "./dto/recruiter.update.input";
import { RecruiterEntity } from "./model/recruiter.entity";
import { RecruiterModel } from "./model/recruiter.model";

@Injectable()
export class RecruitersService {
    constructor( @InjectRepository(RecruiterEntity) private recruiterEntity: Repository<RecruiterEntity> ) {}

    // QUERIES
    async getRecruiters(): Promise<RecruiterModel[]> {
        return await this.recruiterEntity.find({});
    }

    async getRecruiter(recruiterNo: string): Promise<RecruiterModel> {
        return await this.recruiterEntity.findOneOrFail({recruiterNo: recruiterNo})
    }

    // MUTATIONS
    async createRecruiter(recruiter: RecruiterCreateInput): Promise<RecruiterModel> {
        const newRecruiter = this.recruiterEntity.create(recruiter);
        return await this.recruiterEntity.save(newRecruiter);
    }

    async deleteRecruiter(recruiterNo: string): Promise<RecruiterModel> {
        const recruiter = await this.recruiterEntity.findOneOrFail({recruiterNo: recruiterNo});
        this.recruiterEntity.remove(recruiter);
        return recruiter;
    }

    async updateRecruiter(recruiter: RecruiterUpdateInput): Promise<RecruiterModel> {
        const updatingRecruiter = await this.recruiterEntity.findOneOrFail({recruiterNo: recruiter.recruiterNo});
        updatingRecruiter.firstName = recruiter.firstName;
        updatingRecruiter.lastName = recruiter.lastName;
        updatingRecruiter.email = recruiter.email;
        updatingRecruiter.avatar = recruiter.avatar;
        updatingRecruiter.phone = recruiter.phone;
        updatingRecruiter.location = recruiter.location;
        updatingRecruiter.createdByID = recruiter.createdByID;
        return await this.recruiterEntity.save(updatingRecruiter);
    }
}