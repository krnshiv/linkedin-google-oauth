import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity({ name: "users" })
  export class CustomUser {
    @PrimaryGeneratedColumn()   id!: number;
    @Column({ unique: true })   email!: string;
    @Column()                   name!: string;
    @Column()                   image!: string;
    @CreateDateColumn()         createdAt!: Date;
    @UpdateDateColumn()         updatedAt!: Date;
  }
  