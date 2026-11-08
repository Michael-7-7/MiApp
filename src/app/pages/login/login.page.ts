import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class LoginPage {

  nombre: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.nombre.trim() !== '' && this.contrasena.trim() !== '') {
      this.router.navigate(['/saludo'], {
        queryParams: { nombre: this.nombre }
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}