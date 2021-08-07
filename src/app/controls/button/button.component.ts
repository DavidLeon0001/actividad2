import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  internalClick() {
    this.onClick.emit();
  }

}
