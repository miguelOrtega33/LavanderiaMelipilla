import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {

  constructor() { }

  // Local storage del informe
  tipo = localStorage.getItem('tipo');
  servicio = localStorage.getItem('servicio');
  registro = localStorage.getItem('registro');
  codigo = localStorage.getItem('codigo');
  cantidad = localStorage.getItem('cantidad');
  usuario = localStorage.getItem('nombreUsuario');

  // Datos para la fecha
  fecha: Date = new Date();
  dia: number = this.fecha.getDate();
  mes: number = this.fecha.getMonth() + 1;
  annio: number = this.fecha.getFullYear();

  ngOnInit() {
  }

}
