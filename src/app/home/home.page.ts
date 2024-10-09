import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  icono = "oscuro"


  constructor() {}

  cambiarTema() {
    if (this.icono == "oscuro") {
      document.documentElement.style.setProperty("--fondos", "#1a1a1a")
      document.documentElement.style.setProperty("--textos", "#FFFFFF")
      this.icono = "claro"
    } else {
      document.documentElement.style.setProperty("--fondos", "#ffffff")
      document.documentElement.style.setProperty("--textos", "#1a1a1a")
      this.icono = "oscuro"
    }
  }

}
