
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.page').then(m => m.NosotrosPage)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.page').then(m => m.ServiciosPage)
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/galeria/galeria.page').then(m => m.GaleriaPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then(m => m.ContactoPage)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
  