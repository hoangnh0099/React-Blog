import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hello {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;
}
