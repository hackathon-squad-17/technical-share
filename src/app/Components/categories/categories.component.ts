import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = ['UX Design', 'Back-End', 'Front-End', 'Marketing', 'Testes', 'Produto', 'Agile']

  constructor() { }

  ngOnInit(): void {
  }

}
