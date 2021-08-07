import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Task } from '../../schedule/types/Task';
const StatusBulletColor = {
  pending: 'lightgray',
  onGoing: 'lightblue',
  done: 'lightgreen'
}
@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {
  @Input() task?: Task;
  @Input() displayText = '';
  @Input() status: keyof typeof StatusBulletColor = 'pending';
  @Output() onClick = new EventEmitter<void>();

  
  constructor() { }

  ngOnInit(): void {
  }
  internalClick() {
    this.onClick.emit();
  }
  getBorder() {
    return `4px solid ${StatusBulletColor[this.status]}`
  }

  get estado() {
    return this.task ? this.task?.status : '';
  }
  set estado (value) {
    if (!this.task) {
      this.task = {} as Task;
    }
    this.task.status = value as 'pending' | 'onGoing' | 'done';
  }
}
