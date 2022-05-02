import { Component, OnInit } from '@angular/core';
import { Banner } from './banners.model';
import { BannersService } from './banners.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  Banners: Banner[] = [];
  constructor(private bannerservice: BannersService ) { 
    
  }

  ngOnInit(): void {
  
    this.obtenerBanner();
  }

  private obtenerBanner(){
  
    this.bannerservice.obtenerBannerRest().subscribe(
      (data) => {
        data.forEach( (banner) =>{
          const bannerAIncluir: Banner = new Banner(banner.id, banner.nombre, banner.imagen);

          this.Banners.push(bannerAIncluir);
        })
      }
    )}
  }
