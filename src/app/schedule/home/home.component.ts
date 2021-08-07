import { Component, OnInit } from '@angular/core';
import { Task } from '../types/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titulo1:string=''
  titulo2:string=''
  tasks : Array<Task> = [
    {
      id: 1,
      displayText: 'Capacitación',
      status: 'pending'
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onClick1(){
    const idsArray = this.tasks.map(element => element.id)
    const newId = Math.max(...idsArray) + 1;
    console.log('Nuevo id', newId);

    this.tasks.push({
      id: newId,
      displayText: this.titulo1,
      status: 'pending'
    })
  }
  onClick2(){}

  selectedTask?: Task;
  setSelectedTask(task: Task) {
    console.log('select task', task)
    this.selectedTask = task;
  }
}
