import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CompanyEntity {
    @PrimaryGeneratedColumn('uuid')
    companyNo: string

    @Column()
    name: string

    @Column()
    logo: string

    @Column()
    about: string

    @Column()
    recruiterNo: string
}