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
      "name": "Inicio",
      "icon": "assets/ico/home-light.svg"
    },
    {
      "name": "Contratos",
      "icon": "assets/ico/paper.svg"
    },
    {
      "name": "Acciones",
      "icon": "assets/ico/tool.svg"
    },
    {
      "name": "Objetivos",
      "icon": "assets/ico/star-light.svg"
    },
    {
      "name": "Herramientas",
      "icon": "assets/ico/money.svg"
    },
    {
      "name": "Servicio al cliente",
      "icon": "assets/ico/talk.svg"
    }
  ]
}
