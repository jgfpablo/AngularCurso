import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  heroes: string[] = ['SpyderMan', 'IronMan', 'Thor', 'Hulk'];

  heroeBorrado: string = '';

  borrarHeroe = (): string => {
    this.heroeBorrado = this.heroes.shift() || '';
    return this.heroeBorrado;
  };
}
