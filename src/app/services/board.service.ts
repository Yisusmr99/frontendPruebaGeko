import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colum0,Colum1,Colum2,Colum3,Colum4,Colum5,Colum6,Colum7,Colum8,Name } from '../interfaces/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  API_ENDPOINT = 'http://localhost/backendPruebaGeko/public/api/';
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'tablero');
  }
  save(colum0:Colum0,colum1:Colum1,colum2:Colum2,colum3:Colum3,colum4:Colum4,
    colum5:Colum5,colum6:Colum6,colum7:Colum7,colum8:Colum8,name:Name){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'saveBoard',
      [colum0,colum1,colum2,colum3,colum4,colum5,colum6,colum7,colum8,name], {headers:headers});
  };
}
