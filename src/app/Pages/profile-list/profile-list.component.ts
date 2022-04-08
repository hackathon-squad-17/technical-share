import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  user = 'Fernanda';
  dynamicSlides = [
    {
      id: "1",
      src:'/assets/img/foto-jorge.png',
      nome:'Jorge Souza',
      title: 'Dev Front-End',
      skills: [
        "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
      ]
    },
    {
      id: "2",
      src:'/assets/img/foto-julia.png',
      nome:'Julia Garcia',
      title: 'UX Designer',
      skills: [
        "Photoshop", 'Illustrator', 'Research', 'UX Writing', 'Figma'
      ]
    },
    {
      id: "3",
      src:'/assets/img/foto-julia.png',
      nome:'Julia Garcia',
      title: 'UX Designer',
      skills: [
        "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
      ]
    },
    {
      id: "4",
      src:'/assets/img/foto-julia.png',
      nome:'Julia Garcia',
      title: 'UX Designer',
      skills: [
        "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
      ]
    },
    {
      id: "6",
      src:'/assets/img/foto-julia.png',
      nome:'Julia Garcia',
      title: 'UX Designer',
      skills: [
        "Mobile", 'Angular', 'CSS', 'React', 'Svelte'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
