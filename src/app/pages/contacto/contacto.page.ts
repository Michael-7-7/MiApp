import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { NavegadorComponent } from '../../components/navegador/navegador.component';
import { IonFooter } from '@ionic/angular/ion-footer';
import { IonToolbar } from '@ionic/angular/ion-toolbar';
import { IonIcon } from '@ionic/angular/ion-icon';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
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
export class ContactoPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}