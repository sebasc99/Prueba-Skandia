import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() display: Boolean = false;
  @Output() valueEmitted = new EventEmitter<Boolean>();
  
  // Funcion para emitir el valor y determinar si se muestra o no el drawer
  emitValue() {
    this.display = !this.display;
    this.valueEmitted.emit(this.display);
  }
}
