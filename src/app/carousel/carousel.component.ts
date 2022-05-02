import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel.model';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  Carousel: Carousel[] = [];

  constructor(
    private carouselservice: CarouselService
  ) { }

  ngOnInit(): void {
    this.obtenerImagenes();

  }

  private obtenerImagenes(){
    this.carouselservice.obtenerSlider().subscribe(
      (data) => {
        data.forEach( (slider) => {
          const CarouselAIncluir: Carousel = new Carousel(slider.id,  slider.nombre, slider.imagen);
          this.Carousel.push(CarouselAIncluir);
        })
      }
    )
  }

}
