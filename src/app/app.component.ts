import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import data from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  mostrarTarjeta = true;

  title = 'clase-05-comunicacion-entre-componentes';

  @ViewChild('rowElement')
  rowElement?: ElementRef<HTMLDivElement>;

  constructor() {
    console.log('Se llamo el constructor');
  }

  ngOnInit(): void {
    console.log('El componente se inicio');
  }

  ngAfterViewInit(): void {
    console.log('Se renderizo la vista');
    console.log(this.rowElement);
  }

  personajes = data;

  onClick(ev: string): void {
    console.log(ev);
  }

  showData(personaje: object): void {
    alert(JSON.stringify(personaje));
  }

  getBgColor(status: string): string {
    switch (status) {
      case 'Alive':
        return 'text-bg-success';
      case 'Dead':
        return 'text-bg-danger';
      default:
        return 'text-bg-dark';
    }
  }
}
