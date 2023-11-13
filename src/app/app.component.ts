import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/:id', icon: 'home' },
    { title: 'Escanear QR', url: '/escanear', icon: '' },
    { title: 'Registrar', url: '/registrar', icon: 'qr-code' },
    { title: 'informes', url: '/informes', icon: 'qr-code' },
  ];



  constructor(public router: Router, private menu: MenuController, private navCtrl: NavController) {}

  emailUsuario = localStorage.getItem('emailUsuario');


    ngOnInit() {
      this.menu.enable(false);
    }

    public alertButtons = [
      {
        text: 'Cancelar',
        role: 'cancelar',
      },
      {
        text: 'Confirmar',
        role: 'confirmar',
        handler: () => {
          this.navCtrl.navigateForward('/ingreso');
          this.menu.close();
          this.menu.enable(false);
          localStorage.removeItem('autenticado');
        },
      },
    ];
}
