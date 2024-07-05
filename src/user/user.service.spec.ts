import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should create a user', () => {
    const id = service.createUser('John Doe', 'john@example.com');
    expect(id).toBeDefined();
  });

  it('should get a user', () => {
    const id = service.createUser('John Doe', 'john@example.com');
    const user = service.getUser(id);
    expect(user).toBeDefined();
    expect(user.name).toBe('John Doe');
  });

  it('should update user email', () => {
    const id = service.createUser('John Doe', 'john@example.com');
    const result = service.updateUserEmail(id, 'newemail@example.com');
    expect(result).toBe(true);
    const user = service.getUser(id);
    expect(user.email).toBe('newemail@example.com');
  });
});