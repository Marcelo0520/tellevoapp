import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(    
  ) {}

  usuario:string=''
  email:string = ''


  /* Requiere haber creados los usuarios
  login(){
    for(let user of this.usuario){
      if(user.email == this.email && user.clave == this.clave){
       console.log(`Bienvenido/a ${user.nombre}!.`)
       return
      }
    }

  }
  */
}
