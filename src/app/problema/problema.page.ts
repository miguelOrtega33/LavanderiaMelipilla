import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.page.html',
  styleUrls: ['./problema.page.scss'],
})
export class ProblemaPage implements OnInit {
  public alertButtons = ['OK']
  constructor( private alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Muchas Gracias!.',
      message: 'Sus comentarios nos ayudan a poder mejorar la aplicacion :)',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateForward('/folder/:id');
        }
      }]
    });

    await alert.present();
  }

}
