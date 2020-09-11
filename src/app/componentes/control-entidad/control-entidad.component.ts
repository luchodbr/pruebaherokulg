import { Component, OnInit } from '@angular/core';
import { MiServiceService } from '../../service/mi-service.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listadoUsuarios :any;
  constructor(private miServ : MiServiceService) { }

  ngOnInit(): void {
    this.miServ.obtenerUsuarios().subscribe(usuarios => {
      this.listadoUsuarios = usuarios;
    }, error => {
      console.log('Error');
    });
  }

}
