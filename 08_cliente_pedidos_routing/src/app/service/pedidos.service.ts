import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/Pedido';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url:string="http://localhost:9000/spedidos/";
  constructor(private http:HttpClient) { }

  alta(pedido:Pedido):Observable<void>{
    return this.http.post<void>(this.url+"alta",pedido);
  }
  pedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url+"pedidos");
  }
}
