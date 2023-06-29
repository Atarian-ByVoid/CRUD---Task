import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() taskData: Task): Promise<Task> {
    return this.tasksService.create(taskData);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() taskData: Task): Promise<Task> {
    return this.tasksService.update(id, taskData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.tasksService.delete(id);
  }
}
