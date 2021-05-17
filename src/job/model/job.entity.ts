import { NodeWorker } from "node:inspector";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JobEntity {
    @PrimaryGeneratedColumn('uuid')
    jobNo: string

    @Column()
    recruiterNo: string

    @Column()
    companyNo: string

    @Column()
    jobTitle: string

    @Column()
    location: string

    @Column()
    industry: string

    @Column()
    jobDescription: string

    @Column()
    qualification: string

    @Column()
    requirements: string

    @Column()
    postDate: Date
}