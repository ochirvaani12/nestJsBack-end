import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecruiterEntity {
    @PrimaryGeneratedColumn('uuid')
    recruiterNo: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string;

    @Column()
    avatar: string

    @Column()
    phone: string

    @Column()
    location: string

    @Column()
    createdByID: string
}