import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { RoleService } from 'src/services/role.service';
import {
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/dto/requests/role-request.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

// post, get, patch and delete - http methods
@ApiTags('Roles')
@Controller('api/v1/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async createRole(@Body() role: CreateRoleDto) {
    return await this.roleService.createRole(role);
  }

  @Get()
  @ApiQuery({
    name: 'take',
    required: false,
    type: Number,
    description: 'Number of roles to retrieve',
  })
  @ApiQuery({
    name: 'skip',
    required: false,
    type: Number,
    description: 'Number of roles to skip',
  })
  async getRoles(@Query('take') take?: number, @Query('skip') skip?: number) {
    return await this.roleService.getAllRoles(take, skip);
  }

  @Get(':id')
  async getRole(@Param('id') id: number) {
    return await this.roleService.getRole(id);
  }

  @Patch(':id')
  async updateRole(@Param('id') id: number, @Body() role: UpdateRoleDto) {
    const updated = await this.roleService.updateRole(id, role);
    if (!updated) throw new NotFoundException('Role not found');
    return updated;
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: number) {
    await this.roleService.deleteRole(id);
  }
}
