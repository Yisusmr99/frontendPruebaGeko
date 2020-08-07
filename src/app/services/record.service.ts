import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  API_ENDPOINT = 'http://localhost/backendPruebaGeko/public/api/';

  constructor(private httpClient: HttpClient) { }
  get(){
    return this.httpClient.get(this.API_ENDPOINT+'list');
  }

}
