import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() inputDeUsuarios :any;

  constructor() { }
  ngOnInit(): void {
 
    console.log(this.inputDeUsuarios);
  }

}
