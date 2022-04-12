import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) {}


  public uploadImage(image: File, usuarioLogin: string){
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${environment.apiRoot}usuarios/upload-foto?usuarioLogin=${usuarioLogin}`, formData);
  }
}
