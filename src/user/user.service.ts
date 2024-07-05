import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import { UserDTO } from './user.dto';


@Injectable()
export class UserService {
  private users = [];

  createUser(userDTO:UserDTO): IUser {
    const id = Math.random().toString(36).substr(2, 9);
    const newuser: IUser = { id,name: userDTO.name ,email: userDTO.email };
    this.users.push(newuser);
    return newuser;
  }

  getUser(id: string): IUser {
    return this.users.find(user => user.id === id);
  }

  updateUserEmail(id: string, newEmail: string): IUser {
    const user = this.getUser(id);
    if (user) {
      user.email = newEmail;
      return user;
    }
    return user;
  }
}