import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';

import { IonHeader } from '@ionic/angular/ion-header';
import { IonToolbar } from '@ionic/angular/ion-toolbar';
import { IonTitle } from '@ionic/angular/ion-title';
import { IonButtons } from '@ionic/angular/ion-buttons';
import { IonButton } from '@ionic/angular/ion-button';
import { IonFooter } from '@ionic/angular/ion-footer';
import { IonIcon } from '@ionic/angular/ion-icon';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonFooter,
IonIcon
  ]
})
export class NavegadorComponent {

  paginas = [
    '/inicio',
    '/nosotros',
    '/servicios',
    '/galeria',
    '/contacto'
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  // =====================================
  // MÉTODO 1: ANGULAR ROUTER
  // =====================================

  
  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

  siguientePagina() {
    const actual = this.router.url.split('?')[0];
    const posicion = this.paginas.indexOf(actual);
    const siguiente = posicion === 4 || posicion === -1
      ? '/inicio'
      : this.paginas[posicion + 1];

    this.router.navigate([siguiente]);
    
  }
    cerrarSesion() {
    this.router.navigate(['/login']);
  }
  


  // =====================================
  // MÉTODO 2: NAVCONTROLLER (ACTIVO)
  // =====================================
/*
  navegar(ruta: string) {
    this.navCtrl.navigateForward(ruta);
  }

  siguientePagina() {
    const actual = this.router.url.split('?')[0];
    const posicion = this.paginas.indexOf(actual);
    const siguiente = posicion === 4 || posicion === -1
      ? '/inicio'
      : this.paginas[posicion + 1];

    if (siguiente === '/inicio') {
      this.navCtrl.navigateRoot('/inicio');
    } else {
      this.navCtrl.navigateForward(siguiente);
    }
  }*/
}