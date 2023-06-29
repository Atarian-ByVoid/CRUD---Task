import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async create(taskData: Task): Promise<Task> {
    const task = new this.taskModel(taskData);
    return task.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findById(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, taskData: Task): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, taskData, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.taskModel.findByIdAndRemove(id).exec();
  }
}
