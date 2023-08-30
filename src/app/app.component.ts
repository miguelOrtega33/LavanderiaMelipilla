import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escanear QR', url: '/folder/inbox', icon: 'mail' },
    { title: 'Horario', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Horario', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Horario', url: '/folder/outbox', icon: 'paper-plane' }
  ];
  constructor() {}
}