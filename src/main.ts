import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { addIcons } from 'ionicons';
import {
  logoFacebook,
  logoInstagram,
  logoWhatsapp,
  logoYoutube
} from 'ionicons/icons';

addIcons({
  'logo-facebook': logoFacebook,
  'logo-instagram': logoInstagram,
  'logo-whatsapp': logoWhatsapp,
  'logo-youtube': logoYoutube
});
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withComponentInputBinding()),
  ],
});
