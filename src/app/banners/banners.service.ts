import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from './banners.interface';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(
    private http: HttpClient
  ) { }



  public obtenerBannerRest(): Observable<IBanner[]>{
    const urlEndPoint: string = "http://localhost:3000/banners"
    return this.http.get<IBanner[]>(urlEndPoint);

  }
}
