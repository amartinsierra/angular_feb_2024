import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';
import { CLIENT_ID, GRANT_TYPE, PASSWORD, URL_AUTH, USUARIO } from '../custom_properties';
import { TokenResponse } from '../model/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  token:string="";
  url:string="http://localhost:9000/";
  constructor(private http:HttpClient) {
    this.setToken();
   }
  tematicas():Observable<string[]>{

    return this.http.get<string[]>(this.url+"tematicas");
  }
  catalogo():Observable<Libro[]>{
    //añadir encabezado Authorization
    if(this.token==""){
      alert("Token aún no diponible");
      return new Observable<Libro[]>();
    }
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer "+this.token);
    return this.http.get<Libro[]>(this.url+"catalogo",{"headers":heads});
  }
  libroPorIsbn(isbn:number):Observable<Libro>{
    return this.http.get<Libro>(this.url+"libro/"+isbn);
  }
  nuevoLibro(libro:Libro):Observable<void>{
    //añadir encabezado Authorization
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer "+this.token);
    return this.http.post<void>(this.url+"alta",libro,{"headers":heads});
  }
  //este método va a por el token, y cuando esté lo guarda en la variable token
  setToken():void{
    let params=new HttpParams();
    let heads=new HttpHeaders();
    params=params.set("client_id",CLIENT_ID);
    params=params.set("username",USUARIO);
    params=params.set("password",PASSWORD);
    params=params.set("grant_type",GRANT_TYPE);
    let url=URL_AUTH;
    heads=heads.set("Content-Type","application/x-www-form-urlencoded");
    this.http.post<TokenResponse>(url,params,{"headers":heads})
    .subscribe(data=>this.token=data.access_token);
  }

}
