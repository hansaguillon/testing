import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  createUser(name: string, email: string): string {
    const id = Math.random().toString(36).substr(2, 9);
    this.users.push({ id, name, email });
    return id;
  }

  getUser(id: string): any {
    return this.users.find(user => user.id === id);
  }

  updateUserEmail(id: string, newEmail: string): boolean {
    const user = this.getUser(id);
    if (user) {
      user.email = newEmail;
      return true;
    }
    return false;
  }
}