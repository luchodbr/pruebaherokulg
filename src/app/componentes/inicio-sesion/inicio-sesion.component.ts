import { Component, OnInit } from '@angular/core';
import { MiServiceService } from '../../service/mi-service.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private miServ : MiServiceService) { }

  ngOnInit(): void {
    console.log(this.miServ.user);
  }

}
