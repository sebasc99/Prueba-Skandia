import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  @Input() display: Boolean = false;
  @Output() valueEmitted = new EventEmitter<Boolean>();
  
  emitValue() {
    this.display = !this.display;
    this.valueEmitted.emit(this.display);
  }
  
  itemSelected = 0;
  listOption = [
    {
      "name": "Name",
      "icon": "assets/ico/happy-face-small.svg"
    },
    {
      "name": "Name",
      "icon": "assets/ico/happy-face-small.svg"
    },
    {
      "name": "Name",
      "icon": "assets/ico/happy-face-small.svg"
    },
    {
      "name": "Name",
      "icon": "assets/ico/happy-face-small.svg"
    },
    {
      "name": "Name",
      "icon": "assets/ico/happy-face-small.svg"
    },
  ]
}
