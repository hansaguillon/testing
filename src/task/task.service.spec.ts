import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should create a task', () => {
    const id = service.createTask('Test Task', 'Description');
    expect(id).toBeDefined();
  });

  it('should get a task', () => {
    const id = service.createTask('Test Task', 'Description');
    const task = service.getTask(id);
    expect(task).toBeDefined();
    expect(task.title).toBe('Test Task');
  });

  it('should complete a task', () => {
    const id = service.createTask('Test Task', 'Description');
    const result = service.completeTask(id);
    expect(result).toBe(true);
    const task = service.getTask(id);
    
    expect(task.completed).toBe(true);
  });
});