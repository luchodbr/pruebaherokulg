import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
