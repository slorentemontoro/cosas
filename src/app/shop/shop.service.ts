import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShop } from './shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient
    ) { }

  public obtenerRopa(): Observable<IShop[]>{
    const urlEndPoint: string = "http://localhost:3000/shop"
    return this.http.get<IShop[]>(urlEndPoint);

  }
}
