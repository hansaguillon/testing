import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './task.dto';


@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() taskdto: TaskDTO) {
    return this.taskService.createTask(taskdto);
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