import { IsNumber, IsString, IsOptional } from 'class-validator';

// All fields

export class RoleResponseDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly roleName: string;

  @IsString()
  @IsOptional()
  readonly roleDescription?: string;

  @IsNumber()
  readonly createdBy: number;

  @IsNumber()
  readonly updatedBy: number;

  @IsOptional()
  readonly createdAt: Date;

  @IsOptional()
  readonly updatedAt: Date;
}
