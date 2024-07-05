import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto = { name: 'John Doe', email: 'john@example.com' };
    jest.spyOn(service, 'createUser').mockReturnValue('mockedId');
    
    expect(controller.createUser(createUserDto)).toBe('mockedId');
    expect(service.createUser).toHaveBeenCalledWith(createUserDto.name, createUserDto.email);
  });

  it('should get a user', () => {
    const mockUser = { id: 'testId', name: 'John Doe', email: 'john@example.com' };
    jest.spyOn(service, 'getUser').mockReturnValue(mockUser);
    
    expect(controller.getUser('testId')).toBe(mockUser);
    expect(service.getUser).toHaveBeenCalledWith('testId');
  });

  it('should update user email', () => {
    jest.spyOn(service, 'updateUserEmail').mockReturnValue(true);
    
    expect(controller.updateUserEmail('testId', 'newemail@example.com')).toBe(true);
    expect(service.updateUserEmail).toHaveBeenCalledWith('testId', 'newemail@example.com');
  });
});