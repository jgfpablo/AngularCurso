import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: `heroe.component.html`,
})
export class HeroeComponent {
  public nombre: string = 'IronMan';
  public edad: number = 34;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'SpiderMan';
  }

  cambiarEdad(): void {
    this.edad = 24;
  }
}
