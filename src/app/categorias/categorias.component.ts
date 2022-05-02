import { Component, OnInit } from '@angular/core';
import { Categorias } from './categorias.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  Categorias: Categorias[] = [];
  constructor(private categoriaservice: CategoriasService) { }

  ngOnInit(): void {

    this.obtenerCategorias();
  }


  private obtenerCategorias(){
  
    this.categoriaservice.obtenerCategorias().subscribe(
      (data) => {
        data.forEach( (categoria) =>{
          const CategoriaAIncluir: Categorias = new Categorias(categoria.id, categoria.nombre, categoria.imagen);
          this.Categorias.push(CategoriaAIncluir);
        })
      }
    )}

}
