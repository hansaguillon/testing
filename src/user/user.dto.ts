import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UserDTO {
  @IsString()
  name: string;
  @IsString()
  email: string;
}


export class UpdateUserDTO extends PartialType(UserDTO) {}