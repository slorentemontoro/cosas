import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Shop } from './shop.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  Shops: Shop[] = [];

  constructor(
    private shopservice: ShopService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.obtenerShop();
  }


  private obtenerShop(){
  
    this.shopservice.obtenerRopa().subscribe(
      (data) => {
        data.forEach( (shop) =>{
          const ropaAIncluir: Shop = new Shop(shop.id, shop.nombre, shop.imagen, shop.precio, shop.favorito);
          this.Shops.push(ropaAIncluir);
        })
      }
    )}


    public navegarAlArticulo(Articulo: Shop): void{
      this.router.navigate(['articulo', Articulo.getId()], { queryParams:  {"nombre":Articulo.getNombre(), "precio":Articulo.getPrecio(), "Imagen":Articulo.getImagen()}});
      
    }


}
