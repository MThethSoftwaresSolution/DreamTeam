import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './api-config';
import { BaseUrl } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, public api:ConfigService) { }

  urlBase = BaseUrl.Main;
  url = this.urlBase+"api/data"

  getData(priceCode: string) {
    return this.http.get<any[]>(this.url+"?priceCode="+priceCode);
  }

}
