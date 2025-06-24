import { MySQLService } from './MySQLService';
import { UserService } from './UserService';

const mysql = new MySQLService();
const userService = new UserService(mysql);

userService.register("Sunny");
