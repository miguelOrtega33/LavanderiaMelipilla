import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
  }

  fecha: Date = new Date();
  dia: number = this.fecha.getDate(); 
  mes: number = this.fecha.getMonth() + 1; 
  annio: number = this.fecha.getFullYear(); 
  hora: number = this.fecha.getHours(); 
  minutos: number = this.fecha.getMinutes(); 
  usuario = localStorage.getItem('usuario');

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
