import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  templateUrl: `contador.component.html`,
})
export class ContadorComponent {
  title: string = 'Contador App';

  contador = 0;

  base = 5;

  acumular = (num: number): void => {
    this.contador += num;
  };
  reset = (): void => {
    this.contador = 0;
  };
}
