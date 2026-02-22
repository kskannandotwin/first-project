import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// role name, description, created_by, updated_by, created_at, updated_at

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: 'This is a unique identifier.',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 150,
    default: '',
    nullable: false,
    unique: true,
  })
  roleName: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  roleDescription: string;

  @Column({
    name: 'created_by',
  })
  createdBy: number;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: number;

  @CreateDateColumn({
    name: 'created_at',
    nullable: true,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date;
}
