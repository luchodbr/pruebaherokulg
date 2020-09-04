import { Component, OnInit } from '@angular/core';
import {User} from '../../clases/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MiServiceService } from '../../service/mi-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user :User = new User();

  constructor(private root : Router , private miServ : MiServiceService) { }

  ngOnInit(): void {
  }
  Logear(){
    if(this.user.name=="asd" && this.user.password == "123"){
      this.miServ.user=this.user;
      this.root.navigateByUrl('inicioSesion');
    }else{
      this.root.navigateByUrl('error');
    }
  }
}
