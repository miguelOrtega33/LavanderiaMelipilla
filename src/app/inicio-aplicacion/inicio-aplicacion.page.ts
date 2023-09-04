import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-aplicacion',
  templateUrl: './inicio-aplicacion.page.html',
  styleUrls: ['./inicio-aplicacion.page.scss'],
})
export class InicioAplicacionPage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    private router: Router  
  ) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
     // Simula un retraso antes de redirigir
     setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/ingreso']); // Reemplaza 'nueva-pagina' por el nombre de tu página
    }, 1000); // Ajusta el tiempo de espera antes de la redirección
  }

  ngOnInit() {
  }

}
