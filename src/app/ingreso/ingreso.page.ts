import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  textoInput: string = '';
  constructor(
    private loadingCtrl: LoadingController,
    private router: Router  ,
    private navCtrl: NavController
    ) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000
    });
    await loading.present();
     // Simula un retraso antes de redirigir
     setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/folder/:id']); // Reemplaza 'nueva-pagina' por el nombre de tu página
    }, 2000); // Ajusta el tiempo de espera antes de la redirección
  }
  
  ngOnInit() {
  }

}
