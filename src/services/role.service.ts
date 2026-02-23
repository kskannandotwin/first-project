import { Injectable } from '@nestjs/common';
import { RoleRepository } from 'src/repositories/role.repository';
import {
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/dto/requests/role-request.dto';
import { RoleResponseDto } from 'src/dto/responses/role-response.dto';

// create, getall, get, update, delete

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async createRole(role: CreateRoleDto): Promise<RoleResponseDto> {
    return await this.roleRepository.createRole(role);
  }

  async getAllRoles(
    take: number = 10,
    skip: number = 0,
  ): Promise<RoleResponseDto[]> {
    return await this.roleRepository.findAllRoles(take, skip);
  }

  async getRole(id: number): Promise<RoleResponseDto | null> {
    return await this.roleRepository.findRoleById(id);
  }

  async updateRole(
    id: number,
    role: UpdateRoleDto,
  ): Promise<RoleResponseDto | null> {
    return await this.roleRepository.updateRoleById(id, role);
  }

  async deleteRole(id: number): Promise<void> {
    await this.roleRepository.deleteRoleById(id);
  }
}
