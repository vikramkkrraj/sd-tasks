import { TaskService } from './TaskService';
import { EmailService } from './EmailService';

const taskService = new TaskService();
const emailService = new EmailService();

taskService.createTask("Refactor SRP example");
emailService.sendEmail("user@example.com");
