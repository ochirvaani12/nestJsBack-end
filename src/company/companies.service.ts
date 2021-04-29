import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompanyCreateInput } from "./dto/company.create.input";
import { CompanyUpdateInput } from "./dto/company.update.input";
import { CompanyEntity } from "./model/company.entity";
import { CompanyModel } from "./model/company.model";

@Injectable()
export class CompaniesService {
    constructor(@InjectRepository(CompanyEntity) private companyRepository: Repository<CompanyEntity>) {}

    // QUERIES
    async getCompanies(): Promise<CompanyModel[]> {
        return await this.companyRepository.find({});
    }

    async getCompany(companyNo: string): Promise<CompanyModel> {
        return await this.companyRepository.findOneOrFail({companyNo: companyNo});
    }

    // MUTATIONS
    async createCompany(companyCreateInput: CompanyCreateInput): Promise<CompanyModel> {
        return await this.companyRepository.save(companyCreateInput);
    }

    async deleteCompany(companyNo: string): Promise<CompanyModel> {
        const company = await this.companyRepository.findOneOrFail({companyNo: companyNo})
        this.companyRepository.remove(company);
        return company;
    }

    async updateCompany(companyUpdateInput: CompanyUpdateInput): Promise<CompanyModel> {
        const company = await this.companyRepository.findOneOrFail({companyNo: companyUpdateInput.companyNo});
        const updatedCompany = this.companyRepository.create(companyUpdateInput);
        return await this.companyRepository.save(updatedCompany);
    }
}