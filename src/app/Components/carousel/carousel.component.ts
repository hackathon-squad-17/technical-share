import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() users:any = [];
  // dynamicSlides = [
  //   {
  //     id: "1",
  //     src:'/assets/img/foto-jorge.png',
  //     nome:'Jorge Souza',
  //     title: 'Dev Front-End',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   },
  //   {
  //     id: "2",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Photoshop", 'Illustrator', 'Research', 'UX Writing', 'Figma'
  //     ]
  //   },
  //   {
  //     id: "3",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   },
  //   {
  //     id: "4",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   },
  //   {
  //     id: "6",
  //     src:'/assets/img/foto-julia.png',
  //     nome:'Julia Garcia',
  //     title: 'UX Designer',
  //     skills: [
  //       "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
  //     ]
  //   }
  // ]

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
