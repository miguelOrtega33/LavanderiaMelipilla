import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController,  private navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required),
      'confirmar_contrasena': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async registrar() {
    var f = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Atencion!.',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (f.contrasena != f.confirmar_contrasena) {
      const alert = await this.alertController.create({
        header: 'Atencion!.',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (f.nombre.length < 5) {
      const alert = await this.alertController.create({
        header: 'Atencion!.',
        message: 'Nombre demasiado corto, minimo 5 caracteres!.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } else if (f.email.length < 7) {
      const alert = await this.alertController.create({
        header: '¡Atención!',
        message: 'El correo debe tener al menos 7 caracteres',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } else if (!/^[^\s@]+@duocuc\.cl$/.test(f.email)) {
      const alert = await this.alertController.create({
        header: '¡Atención!',
        message: 'Dominio incorrecto, porfavor asegurate de que sea de la institucion DuocUc.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } else if (f.contrasena.length < 6) {
      const alert = await this.alertController.create({
        header: '¡Atención!',
        message: 'Contrasena demasiado corta!.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } else {

      var nombreUsuario = f.nombre;
      var contrasenaUsuario = f.contrasena;
      var emailUsuario = f.email;

      localStorage.setItem('nombreUsuario', nombreUsuario);
      localStorage.setItem('contrasenaUsuario', contrasenaUsuario);
      localStorage.setItem('emailUsuario', emailUsuario);

      const alert = await this.alertController.create({
        header: 'Felicidades!.',
        message: 'Registrado correctamente',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('/ingreso');
          }
        }]
      });

      await alert.present();
    }
  }
}
