import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { UserDTO } from './user.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should create a user', () => {
    const userDto: UserDTO = { name: 'balerion', email: 'semurio@example.com' };
    const createdUser: IUser = service.createUser(userDto);
    expect(createdUser).toBeDefined();
    expect(createdUser.id).toBeDefined();
    expect(createdUser.name).toBe(userDto.name);
    expect(createdUser.email).toBe(userDto.email);
  });

  it('should get a user', () => {
    const userDto: UserDTO = { name: 'balerion', email: 'semurio@example.com' };
    const createdUser: IUser = service.createUser(userDto);
    const retrievedUser = service.getUser(createdUser.id);
    expect(retrievedUser).toBeDefined();
    expect(retrievedUser).toEqual(createdUser);
  });

  it('should update user email', () => {
    const userDto: UserDTO = { name: 'balerion', email: 'semurio@example.com' };
    const createdUser: IUser = service.createUser(userDto);
    const newEmail = 'revivio@example.com';
    const updatedUser = service.updateUserEmail(createdUser.id, newEmail);
    expect(updatedUser).toBeDefined();
    expect(updatedUser.email).toBe(newEmail);
    const retrievedUser = service.getUser(createdUser.id);
    expect(retrievedUser.email).toBe(newEmail);
  });
});