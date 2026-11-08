import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  RouterLink
]
})
export class SaludoPage implements OnInit {

  nombre: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.nombre = this.route.snapshot.queryParams['nombre'] || 'Usuario';
  }
  

}