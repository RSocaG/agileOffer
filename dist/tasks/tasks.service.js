"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const task_model_1 = require("./models/task.model");
let TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async getTasks() {
        return await this.taskModel.find().exec();
    }
    async getTask(id) {
        return await this.taskModel.findById(id);
    }
    async createTask(task) {
        const newTask = new this.taskModel(task);
        console.log(newTask);
        return await newTask.save();
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(task_model_1.Task)),
    __metadata("design:paramtypes", [Object])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map