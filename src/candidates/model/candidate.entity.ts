import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CandidateEntity {
    @PrimaryGeneratedColumn('uuid')
    candidateNo: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique: true})
    email: string;

    @Column()
    avatar: string;

    @Column()
    phone: string;

    @Column()
    location: string;

    @Column()
    education: string;
} 