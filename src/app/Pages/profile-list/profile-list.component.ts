import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  user = 'Fernanda';
  categories = ['UX Design', 'Back-End', 'Front-End', 'Marketing', 'Testes', 'Produto', 'Agile']
  constructor() { }

  ngOnInit(): void {
  }

}
