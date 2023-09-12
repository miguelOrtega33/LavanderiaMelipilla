import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  usuario: string = "";
  contrasena: string = "";

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router,
    private alertController: AlertController  
    ) { }

    ngOnInit() {
    }

  async ingresar(){
    localStorage.setItem('usuario','admin');
    localStorage.setItem('contrasena','admidn');

    if (localStorage.getItem('usuario') == "admin" && localStorage.getItem('contrasena') == "admin"){
        const loading = await this.loadingCtrl.create({
          message: 'Cargando...',
          duration: 2000
        });
        await loading.present();
         // Simula un retraso antes de redirigir
         setTimeout(() => {
          loading.dismiss();
          this.router.navigate(['/folder/:id']); // Reemplaza 'nueva-pagina' por el nombre de tu página
        }, 2000); // Ajusta el tiempo de espera antes de la redirección
    }else{
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });
    }
  }
}
