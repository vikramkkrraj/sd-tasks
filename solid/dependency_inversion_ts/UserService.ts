import { Database } from './Database';

export class UserService {
  constructor(private db: Database) {}

  register(user: string): void {
    this.db.save(user);
  }
}
