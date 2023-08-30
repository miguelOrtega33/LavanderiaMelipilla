import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escanear QR', url: '/folder/inbox', icon: 'qr-code' },
    { title: 'Horario', url: '/horario', icon: 'calendar-number' },
    { title: 'Asistencia', url: '/asistencia', icon: 'checkmark' },
    { title: 'Reportar un problema', url: '/reportar', icon: 'information' },
    { title: 'Cerrar sesion', url: '/ingreso', icon: 'log-out' }
  ];
  constructor() {}
}