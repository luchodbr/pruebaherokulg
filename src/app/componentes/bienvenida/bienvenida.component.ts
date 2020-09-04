import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  title = 'lab4PrimerProject';
  public edad1 : number ;
  public edad2 : number;
  public suma :number;
  public promedio:number;
  constructor() { }

  ngOnInit() {
  }

  Calcular() {
    this.suma = this.edad1 + this.edad2;
    this.promedio = (this.edad2 + this.edad1) / 2 ;
  }
  LimpiarCuadro(){
    this.edad1 = null;
    this.edad2 = null;
    this.suma = null;
    this.promedio = null;
   }
}
