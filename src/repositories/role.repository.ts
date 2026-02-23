import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

// Role - Create, Find,FindAll, Update, Delete
@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(Role)
    private readonly repository: Repository<Role>,
  ) {}

  async createRole(role: Partial<Role>): Promise<Role> {
    return await this.repository.save(this.repository.create(role));
  }

  async findAllRoles(take: number = 10, skip: number = 0): Promise<Role[]> {
    return await this.repository.find({ take, skip });
  }

  async findRoleById(id: number): Promise<Role | null> {
    return await this.repository.findOneBy({ id });
  }

  async updateRoleById(id: number, role: Partial<Role>): Promise<Role | null> {
    await this.repository.update(id, role);
    return await this.repository.findOneBy({ id });
  }

  async deleteRoleById(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
}
