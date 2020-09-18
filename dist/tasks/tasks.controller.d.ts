import { TasksService } from "./tasks.service";
import { Task } from "./models/task.model";
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    getTasks(): Promise<Task[]>;
    getTask(taskId: string): Promise<Task>;
    createTask(task: CreateTaskDto): Promise<Task>;
    updateTask(task: CreateTaskDto, id: any): string;
    deleteTask(id: any): string;
}
