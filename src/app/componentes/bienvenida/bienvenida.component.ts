import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public ejemplo = 'Hola Mundo';
  public ejemplo2 = 'Hola Mundo';
  constructor() { }

  ngOnInit() {
  }

  PruebaClick() {
    this.ejemplo2 = 'Ejecutamos el evento!!!';
  }
}
