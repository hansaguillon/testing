import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IUser } from './user.interface';

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
    const userDTO = { name: 'balerion', email: 'semurio@example.com' };
    const user = { id: 'mockedId',name: userDTO.name,email: userDTO.email };
    jest.spyOn(service, 'createUser').mockReturnValue(user);
    
    expect(controller.createUser(userDTO)).toBe(user);
    expect(service.createUser).toHaveBeenCalledWith(userDTO);
  });

  it('should get a user', () => {
    const mockUser = { id: 'testId', name: 'balerion', email: 'semurio@example.com' };
    jest.spyOn(service, 'getUser').mockReturnValue(mockUser);
    
    expect(controller.getUser('testId')).toBe(mockUser);
    expect(service.getUser).toHaveBeenCalledWith('testId');
  });

  it('should update user email', () => {
    const user = { id: 'mockedId',name:"balerion",email: 'semurio@example.com' };
    jest.spyOn(service, 'updateUserEmail').mockReturnValue(user);
   
    expect(controller.updateUserEmail('testId', 'revivio@example.com')).toBe(user);
    expect(service.updateUserEmail).toHaveBeenCalledWith('testId', 'revivio@example.com');
  });
});