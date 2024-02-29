import { Component } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';
import { ProductosService } from '../../service/productos.service';
import { PedidosService } from '../../service/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedido:Pedido;
  productos:Producto[];
  pedidos:Pedido[];

  constructor(private productosService:ProductosService,
              private pedidosService:PedidosService){
              this.pedido=new Pedido();
              this.cargarProductos();//para cargar productos desde el principio
    }

  cargarProductos():void{
    this.productosService.productos().subscribe(data=>this.productos=data);
  }
  alta():void{
    this.pedidosService.alta(this.pedido).subscribe();//no recibe resultados
  }
  cargarPedidos():void{
    this.pedidosService.pedidos().subscribe(data=>this.pedidos=data);
  }
}
