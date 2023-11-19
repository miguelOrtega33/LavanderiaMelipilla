import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioRopa: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController,  private navCtrl: NavController) {
    this.formularioRopa = this.fb.group({
      'tipo': new FormControl("", Validators.required),
      'servicio': new FormControl("", Validators.required),
      'registro': new FormControl("", Validators.required),
      'codigo': new FormControl("", Validators.required),
      'cantidad': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  async registrar() {
    var f = this.formularioRopa.value;

    if (this.formularioRopa.invalid) {
      const alert = await this.alertController.create({
        header: 'Atencion!.',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else {

      var tipo = f.tipo;
      var servicio = f.servicio;
      var registro = f.registro;
      var codigo = f.codigo;
      var cantidad = f.cantidad;

      localStorage.setItem('tipo', tipo);
      localStorage.setItem('servicio', servicio);
      localStorage.setItem('registro', registro);
      localStorage.setItem('codigo', codigo);
      localStorage.setItem('cantidad', cantidad);



      const alert = await this.alertController.create({
        header: 'Datos correctos',
        message: 'Lote de ropa ingresada',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('folder/:id');
          }
        }]
      });

      await alert.present();
    }
  }

}
