import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';
import { PASSWORD, USUARIO } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  url:string="http://localhost:9000/";
  constructor(private http:HttpClient) { }
  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url+"tematicas");
  }
  catalogo():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url+"catalogo");
  }
  libroPorIsbn(isbn:number):Observable<Libro>{
    let cadBase64=btoa(USUARIO+":"+PASSWORD);
    //añadir encabezado Authorization
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+cadBase64);
    return this.http.get<Libro>(this.url+"libro/"+isbn,{"headers":heads});
  }
  nuevoLibro(libro:Libro):Observable<void>{
    let cadBase64=btoa(USUARIO+":"+PASSWORD);
    //añadir encabezado Authorization
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+cadBase64);
    return this.http.post<void>(this.url+"alta",libro,{"headers":heads});
  }


}
