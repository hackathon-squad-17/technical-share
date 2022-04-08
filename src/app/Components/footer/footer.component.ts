import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logos = [
    'glassdoor-logo',
    'youtube-logo',
    'linkedin-logo',
    'facebook-logo',
    'instagram-logo',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
