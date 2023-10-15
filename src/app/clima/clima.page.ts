import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit{

  clima: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={5e3e158db3d1bc1e3315260871615853}')
      .subscribe(res => {
        this.clima = res;
        console.log(res);
      });
  }

}
