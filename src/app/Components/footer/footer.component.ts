import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logos = [{
    logo:'glassdoor-logo',
    url:'https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm'
  }, {
    logo: 'youtube-logo' ,
    url: 'https://www.youtube.com/c/GrupoFCamara'
  }, {
    logo:'linkedin-logo',
    url: 'https://www.linkedin.com/company/grupofcamara/'
  }, {
    logo: 'facebook-logo' ,
    url: 'https://web.facebook.com/grupo.fcamara/'
  }, {
    logo: 'instagram-logo',
    url: 'https://www.instagram.com/grupo.fcamara/'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
