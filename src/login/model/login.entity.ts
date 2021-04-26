import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoginEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    email: string

    @Column()
    password: string

}