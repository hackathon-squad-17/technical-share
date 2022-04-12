import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from 'src/app/Services/image-service.service';
import { UserService } from 'src/app/Services/user.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-register-picture',
  templateUrl: './register-picture.component.html',
  styleUrls: ['./register-picture.component.css']
})
export class RegisterPictureComponent implements OnInit {
  @Output() onForward = new EventEmitter<any>();

  image?:File;
  constructor(private imageService: ImageService, private userService: UserService) { }

  ngOnInit(): void {
  }

  submit(imageInput: any){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      let selectedFile = new ImageSnippet(event.target.result, file);
      let username:string | undefined = this.userService.getRegisteringUser()?.login;
      console.log(username)

      // TODO consertar ?? tipagem
     this.imageService.uploadImage(selectedFile.file, username??'').subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
    this.onForward.emit();
  }

  imageSrc: string='';
  readURL(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
            this.imageSrc = event.target.result;
        }

        reader.readAsDataURL(event.target.files[0]);
    }
}
}
