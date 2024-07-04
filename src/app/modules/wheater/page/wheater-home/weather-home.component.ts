import { Component, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit{
  initialCityName = 'Erechim'
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName).subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas.main.temp)
      },
      error: (error) => console.log(error),
    });
  }
}
