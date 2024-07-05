import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    return this.taskService.createTask(body.title, body.description);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Patch(':id/complete')
  completeTask(@Param('id') id: string) {
    return this.taskService.completeTask(id);
  }
}