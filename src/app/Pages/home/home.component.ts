import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      icon: 'search',
      text: 'Encontre um consultor'
    },
    {
      icon: 'event',
      text: 'Agende uma mentoria'
    },
    {
      icon: 'question_answer',
      text: 'Tire suas dúvidas'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
