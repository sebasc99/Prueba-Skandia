import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() display: Boolean = false;
  @Output() valueEmitted = new EventEmitter<Boolean>();
  

  emitValue() {
    this.display = !this.display;
    this.valueEmitted.emit(this.display);
  }
}
