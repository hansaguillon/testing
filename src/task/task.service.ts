import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [];

  createTask(title: string, description: string): string {
    const id = Math.random().toString(36).substr(2, 9);
    this.tasks.push({ id, title, description, completed: false });
    return id;
  }

  getTask(id: string): any {
    return this.tasks.find(task => task.id === id);
  }

  completeTask(id: string): boolean {
    const task = this.getTask(id);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  }
}