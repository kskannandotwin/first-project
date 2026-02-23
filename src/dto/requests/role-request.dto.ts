import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

// create and update
export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  readonly roleName: string;

  @IsString()
  @IsOptional()
  readonly roleDescription?: string;

  @IsOptional()
  createdBy?: number;
}

export class UpdateRoleDto {
  @IsString()
  @IsOptional()
  readonly roleName?: string;

  @IsString()
  @IsOptional()
  readonly roleDescription?: string;

  @IsOptional()
  updatedBy?: number;
}
