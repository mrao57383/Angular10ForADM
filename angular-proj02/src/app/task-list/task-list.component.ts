import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Task[];
  completedCount:number;

  constructor(private taskService:TaskService) {

  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.completedCount = this.tasks.filter(t => t.isComplete).length;
  }

}
