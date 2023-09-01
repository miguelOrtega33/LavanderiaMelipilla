import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atencion',
      subHeader: 'Francisco te ama mucho',
      message: 'Nunca lo olvide mi monita preciosa',
      buttons: [{
        text: 'Yo mas jeje'
      }]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
