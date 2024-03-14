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

  display: Boolean = false;
  cards: CardsModel = {
    listCard: []
  };

  ngOnInit() {
    this.apiService.cards().subscribe(
      (response) => {
        if (response.status == 200) {
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

  scrollLeft() {
    const container = document.getElementById('item-container');
    container!.scrollLeft -= 100; // Ajusta la cantidad de scroll según tus necesidades
  }

  scrollRight() {
    const container = document.getElementById('item-container');
    container!.scrollLeft += 100; // Ajusta la cantidad de scroll según tus necesidades
  }

  visualizeDrawer(event: Boolean) {
    this.display = event;
  }
}
