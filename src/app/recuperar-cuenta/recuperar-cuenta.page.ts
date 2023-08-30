import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})
export class RecuperarCuentaPage implements OnInit {

  constructor(private alertController: AlertController) {}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atencion',
      subHeader: 'Cuenta recuperada',
      message: 'Enviamos un correo para recuperar tu cuenta, porfavor sigue los pasos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
