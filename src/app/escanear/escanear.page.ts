import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  imageSource: any;
  lectura: string | ""="" ;

  constructor() {}
  ngOnInit(){;
  }



async startScan() {
  try {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.lectura = result.content;
      console.log(this.lectura);
    }
  } catch (error) {
    // Si hay un error, puede ser debido a la falta de permisos
    // Aquí puedes solicitar permisos al usuario
    console.error('Error al escanear:', error);

    // Por ejemplo, puedes mostrar un mensaje al usuario y proporcionar un botón para solicitar permisos
    const userPermission = confirm('La aplicación necesita permisos para acceder a la cámara. ¿Deseas otorgar permisos ahora?');

    if (userPermission) {
      try {
        await BarcodeScanner.checkPermission({ force: true });
        // Si el usuario otorga permisos, intenta escanear nuevamente
        await this.startScan();
      } catch (error) {
        console.error('Error al otorgar permisos:', error);
      }
    }
  }
}

}
