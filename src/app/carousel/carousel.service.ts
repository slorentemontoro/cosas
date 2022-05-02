import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarousel } from './carousel.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }


  
  public obtenerSlider(): Observable<ICarousel[]>{
    const urlEndPoint: string = "http://localhost:3000/Slider"
    return this.http.get<ICarousel[]>(urlEndPoint);

  }
}
