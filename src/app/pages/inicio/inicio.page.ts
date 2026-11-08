import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { NavegadorComponent } from '../../components/navegador/navegador.component';
import { IonFooter } from '@ionic/angular/ion-footer';
import { IonToolbar } from '@ionic/angular/ion-toolbar';
import { IonIcon } from '@ionic/angular/ion-icon';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NavegadorComponent,
    IonFooter,
    IonToolbar,
    IonIcon
  ],
})
export class InicioPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}