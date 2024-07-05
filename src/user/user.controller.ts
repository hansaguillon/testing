import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { UserDTO } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: UserDTO): IUser {
    return this.userService.createUser(body);
  }

  @Get(':id')
  getUser(@Param('id') id: string): IUser {
    return this.userService.getUser(id);
  }

  @Patch(':id/email')
  updateUserEmail(@Param('id') id: string, @Body('email') email: string)   {
    return this.userService.updateUserEmail(id, email);
  }
}