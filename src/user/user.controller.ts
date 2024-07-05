import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Patch(':id/email')
  updateUserEmail(@Param('id') id: string, @Body('email') email: string) {
    return this.userService.updateUserEmail(id, email);
  }
}