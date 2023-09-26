import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Share } from '@capacitor/share';

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
    
  ];

 

  constructor(public router: Router, private menu: MenuController, private navCtrl: NavController) {}

  compartirApp(){
    Share.share({
      title: 'Compartir myApp',
      url: 'https://bilbaolabs.cl/',
      dialogTitle: 'Es perfecta !',
    });
  }


    ngOnInit() {
      this.menu.enable(false);
    }

    cerrarSesion(){
      localStorage.removeItem('autenticado');
      this.router.navigate(["/ingreso"]);
      this.menu.close();
    }
}