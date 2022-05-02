import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IShop } from '../shop/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  idArticulo?: string

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  public obtenerRopa(): Observable<IShop[]>{
    this.idArticulo = this.route.snapshot.paramMap.get('idarticulo') ?? undefined;
    const urlEndPoint: string = "http://localhost:3000/shop/:"+this.idArticulo;
    return this.http.get<IShop[]>(urlEndPoint);

  }
}
