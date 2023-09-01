import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/:id', icon: 'home' },
    { title: 'Escanear QR', url: '/escanear', icon: 'qr-code' },
    { title: 'Horario', url: '/horario', icon: 'calendar-number' },
    { title: 'Asistencia', url: '/asistencia', icon: 'checkmark' },
    { title: 'Reportar un problema', url: '/problema', icon: 'information' },
    { title: 'Cerrar sesion', url: '/ingreso', icon: 'log-out' }
  ];
  constructor() {}
}