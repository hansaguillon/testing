import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { TaskDTO } from './task.dto';
import { ITask } from './task.interface';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should create a task', () => {
    const taskDto: TaskDTO = { title: 'Test Task', description: 'Description' };
    const task: ITask = service.createTask(taskDto);
    
    expect(task).toBeDefined();
    expect(task.id).toBeDefined();
    expect(task.title).toBe(taskDto.title);
    expect(task.description).toBe(taskDto.description);
    expect(task.completed).toBe(false);
  });

  it('should get a task', () => {
    const taskDto: TaskDTO = { title: 'Test Task', description: 'Description' };
    const createdTask: ITask = service.createTask(taskDto);
    
    const retrievedTask = service.getTask(createdTask.id);
    
    expect(retrievedTask).toBeDefined();
    expect(retrievedTask).toEqual(createdTask);
  });

  it('should complete a task', () => {
    const taskDto: TaskDTO = { title: 'Test Task', description: 'Description' };
    const createdTask: ITask = service.createTask(taskDto);
    
    const result = service.completeTask(createdTask.id);
    
    expect(result.completed).toBe(true);
    
    const updatedTask = service.getTask(createdTask.id);
    expect(updatedTask.completed).toBe(true);
  });
});