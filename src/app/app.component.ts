import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { CardsModel } from './models/cards.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private apiService: ApiService) { }

  canScrollLeft: Boolean = false;
  canScrollRight: Boolean = true;
  display: Boolean = false;
  cards: CardsModel = {
    listCard: []
  };

  ngOnInit() {
    // Se consume el api correspondiente
    this.apiService.cards().subscribe(
      (response) => {
        if (response.body && response.status == 200) {
          this.cards = response.body;
        } else {
          this.cards = {
            listCard: [
              {
                nameProduct: "Error al obtener los datos.",
                numberProduct: "0",
                balanceProduct: "0",
                detaildProduct: "Sin datos para mostrar"
              }
            ]
          }
          console.error('Error al obtener datos:', response);
        }
      },
      (error) => {
        this.cards = {
          listCard: [
            {
              nameProduct: "Error al obtener los datos.",
              numberProduct: "0",
              balanceProduct: "0",
              detaildProduct: "Sin datos para mostrar"
            }
          ]
        }
        console.error('Error al obtener datos:', error);
      }
    );
  }

  //Funcion para deslizar hacia la izquierda en el slider
  scrollLeft() {
    const container = document.getElementById('item-container');
    container!.scrollLeft -= 100;
    this.updateScrollStatus();
  }

  //Funcion para deslizar hacia la derecha en el slider
  scrollRight() {
    const container = document.getElementById('item-container');
    container!.scrollLeft += 100;
    this.updateScrollStatus();
  }

  // Funcion para actualizar el estado del slider y cambiar el estilo de los botones
  updateScrollStatus() {
    const container = document.getElementById('item-container');
    if (container) {
      this.canScrollLeft = container.scrollLeft > 0;
      this.canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
    }
  }

  // Funcion que emite si se debe mostrar o no el drawer
  visualizeDrawer(event: Boolean) {
    this.display = event;
  }
}
