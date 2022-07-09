import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getOptions() {
    return {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'X-RapidAPI-Host': 'microsoft-azure-translation-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '9784d23ae6mshab608d9a38fa8e3p1eaac2jsn510ee5d165cc'
      })
    };
  }

    
}
