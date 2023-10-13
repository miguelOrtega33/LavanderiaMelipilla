import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface Character {
  name: string;
  image: string;
  id: string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  personajes: Character[] = [];
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private menu: MenuController, private httpClient: HttpClient) {
  }

  fecha: Date = new Date();
  dia: number = this.fecha.getDate();
  mes: number = this.fecha.getMonth() + 1;
  annio: number = this.fecha.getFullYear();
  usuario = localStorage.getItem('nombreUsuario');

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.menu.enable(true);
    this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe((res: any) => {
      console.log(res);
      this.personajes = res.results as Character[]; // Usar la interfaz Character
    });
  }

}
