import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
   tasks = [];

  createTask(taskdto: TaskDTO): ITask {
    const id = Math.random().toString(36).substr(2, 9);
    const newtask = {
      id,
      title: taskdto.title,
      description: taskdto.description,
      completed: false,
    };
    
    this.tasks.push(newtask);
    return newtask;
  }

  getTask(id: string): ITask {
    return this.tasks.find(task => task.id === id);
  }

  completeTask(id: string): ITask {
    const task = this.getTask(id);
    if (task) {
      task.completed = true;
      return task;
    }
    return task;
  }
}