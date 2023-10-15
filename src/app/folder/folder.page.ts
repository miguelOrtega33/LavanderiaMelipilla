import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

interface WeatherResponse {
  main: {
    temp: number;
    // Otras propiedades si las hay
  };
  // Otras propiedades si las hay
}

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {


  public folder!: string;
  constructor(private menu: MenuController,
     public httpClient: HttpClient,) {
  }

  weatherTemp: any = {}
  fecha: Date = new Date();
  dia: number = this.fecha.getDate();
  mes: number = this.fecha.getMonth() + 1;
  annio: number = this.fecha.getFullYear();
  usuario = localStorage.getItem('nombreUsuario');

  loadData(){
    this.httpClient.get<WeatherResponse >(`${API_URL}/weather?lat=${-33.68909}&lon=${-71.21528}&appid=${API_KEY}`).subscribe(results =>{
      console.log(results);
      this.weatherTemp = results['main']
    })
  }

  ngOnInit() {
    this.menu.enable(true);
    this.loadData();
  }
}
