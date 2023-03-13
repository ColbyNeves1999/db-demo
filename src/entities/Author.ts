import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
    @PrimaryGeneratedColumn('uuid')
    authId: string;

    @Column()
    name: string;

    @Column({ default: "unknown" })
    origin: string;

    @ManyToMany(() => Book, (Book) => Book.authors)
    book: Relation<Book>[];

}