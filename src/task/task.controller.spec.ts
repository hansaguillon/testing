import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskDTO } from './task.dto';
import { ITask } from './task.interface';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a task', () => {
    const createTaskDto: TaskDTO = { title: 'Test Task', description: 'Test Description' };
    const createTask: ITask = {
      id: 'mockedId',
      title: createTaskDto.title,
      description: createTaskDto.description,
      completed: false
    };
    jest.spyOn(service, 'createTask').mockReturnValue(createTask);
    
    expect(controller.createTask(createTaskDto)).toBe(createTask);
    expect(service.createTask).toHaveBeenCalledWith(createTaskDto);
  });

  it('should get a task', () => {
    const mockTask = { id: 'testId', title: 'Test Task', description: 'Test Description', completed: false };
    jest.spyOn(service, 'getTask').mockReturnValue(mockTask);
    
    expect(controller.getTask('testId')).toBe(mockTask);
    expect(service.getTask).toHaveBeenCalledWith('testId');
  });

  
  it('should complete a task', () => {
    const mockTask = { id: 'testId', title: 'Test Task', description: 'Test Description', completed: false };
    jest.spyOn(service, 'completeTask').mockReturnValue(mockTask);
    
    expect(controller.completeTask('testId')).toBe(mockTask);
    expect(service.completeTask).toHaveBeenCalledWith('testId');
  });
});