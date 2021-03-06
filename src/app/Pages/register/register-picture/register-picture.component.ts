import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/Services/image-service.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-register-picture',
  templateUrl: './register-picture.component.html',
  styleUrls: ['./register-picture.component.css']
})
export class RegisterPictureComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();
  @Output() onBackward = new EventEmitter<any>();
  imageSrc: string='';
  warning: string='';
  maxSize:boolean = false;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  previewURL(event:any) {
    let maxfilesize = 1024 * 1024,  // 1 Mb
    filesize = event.target.files[0].size

    if ( filesize > maxfilesize ){
    this.warning = "O arquivo é muito grande. Por favor, escolha outra foto."
    this.maxSize = true;
  } else {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
          this.imageSrc = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
  }
  }
  }

  goBack(imageInput:any){
    this.registrationService.setImage(imageInput);
    this.onBackward.emit();
  }

  goForward(imageInput:any){
    this.registrationService.setImage(imageInput);
    this.onForward.emit();
  }


}
