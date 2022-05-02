import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorias } from './categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient
  ) { }


  public obtenerCategorias(): Observable<ICategorias[]>{
    const urlEndPoint: string = "http://localhost:3000/categorias"
    return this.http.get<ICategorias[]>(urlEndPoint);

  }
}
