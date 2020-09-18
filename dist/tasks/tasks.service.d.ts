import { Task } from "./models/task.model";
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private readonly taskModel;
    constructor(taskModel: ReturnModelType<typeof Task>);
    getTasks(): Promise<Task[]>;
    getTask(id: string): Promise<Task>;
    createTask(task: CreateTaskDto): Promise<Task>;
}
