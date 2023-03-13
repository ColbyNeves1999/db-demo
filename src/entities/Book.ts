import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, Relation } from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
    @PrimaryGeneratedColumn('uuid')
    bookId: string;

    @Column()
    title: string;

    @Column()
    pubYear: number | null;

    @Column({ default: false })
    domain: boolean;

    @OneToMany(() => Review, (review) => review.book)
    review: Relation<Review>[];

    @ManyToMany(() => Author, (authors) => authors.book)
    @JoinTable()
    authors: Relation<Author>[];

}