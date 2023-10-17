import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

interface WeatherResponse {
  main: {
    temp: number;
    // Otras propiedades si las hay
  };
  weather: [
    {
      icon: Blob;
      id: number;
    }
  ]
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
     public httpClient: HttpClient) {
  }

  weatherIcon: any
  weatherDetails: any
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
      this.weatherDetails = results['weather'][0]
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png`
      this.weatherTemp.temp = (this.weatherTemp.temp  - 273.15).toFixed(0)
      this.weatherTemp.temp_min = (this.weatherTemp.temp_min  - 273.15).toFixed(0)
      this.weatherTemp.temp_max = (this.weatherTemp.temp_max  - 273.15).toFixed(0)
    })
  }

  ngOnInit() {
    this.menu.enable(true);
    this.loadData();
  }
}
