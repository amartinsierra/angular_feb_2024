import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../model/Resultado';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient) { }

  buscarResultados(tematica:string):Observable<Resultado[]>{
    let url:string="http://localhost:7000/buscador/buscar";
    //llamada asíncrona
    return this.http.get<Resultado[]>(url+"?tematica="+tematica);
  }
}
