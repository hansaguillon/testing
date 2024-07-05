import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

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
    const createTaskDto = { title: 'Test Task', description: 'Test Description' };
    jest.spyOn(service, 'createTask').mockReturnValue('mockedId');
    
    expect(controller.createTask(createTaskDto)).toBe('mockedId');
    expect(service.createTask).toHaveBeenCalledWith(createTaskDto.title, createTaskDto.description);
  });

  it('should get a task', () => {
    const mockTask = { id: 'testId', title: 'Test Task', description: 'Test Description', completed: false };
    jest.spyOn(service, 'getTask').mockReturnValue(mockTask);
    
    expect(controller.getTask('testId')).toBe(mockTask);
    expect(service.getTask).toHaveBeenCalledWith('testId');
  });

  
  it('should complete a task', () => {
    jest.spyOn(service, 'completeTask').mockReturnValue(true);
    
    expect(controller.completeTask('testId')).toBe(true);
    expect(service.completeTask).toHaveBeenCalledWith('testId');
  });
});