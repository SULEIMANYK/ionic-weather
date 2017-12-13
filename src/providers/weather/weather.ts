import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '14e312ebbb18c62c';
  url;

  constructor(public httpClient: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city, state) {
    return new Promise(resolve => {
      this.httpClient.get(this.url + '/' + state + '/' + city + '.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log("Error: " + err);
      });
    });
  }
}