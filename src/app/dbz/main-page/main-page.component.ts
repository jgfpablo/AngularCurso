import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 8000 },
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    console.log(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }
}
