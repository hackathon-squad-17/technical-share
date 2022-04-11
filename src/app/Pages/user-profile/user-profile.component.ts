import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  userId:number = 0;
  checkUser:boolean = false;
  imageUrl:string = ''
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.userService.findUserByLogin(params['login']).subscribe((value:any) => {
          console.log(params['login'])
          this.user = value;
          this.imageUrl = `http://localhost:8080/usuarios/foto-perfil?login=${this.user.login}`;
          if(this.user.login == this.userService.getUserFromStorage()){
            this.checkUser = true
          }
        })
      })
  }

  logout(){
    this.userService.logout();
  }





}
