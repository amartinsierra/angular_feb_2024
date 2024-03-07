import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';
import { ProductosService } from '../../service/productos.service';
import { PedidosService } from '../../service/pedidos.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit{
  pedido:Pedido;
  productos:Producto[];
  constructor(private productosService:ProductosService,
    private pedidosService:PedidosService){

  }
  //se ejecuta una vez que el componente está listo para su utilización
  ngOnInit(): void {
    this.pedido=new Pedido();
    this.cargarProductos();//para cargar productos desde el principio
  }
  cargarProductos():void{
    this.productosService.productos().subscribe(data=>this.productos=data);
  }
  alta():void{
    this.pedidosService.alta(this.pedido).subscribe(data=>this.cargarProductos());//no recibe resultados,
    //pero carga la lista de productos de nuevo una vez que se haya guardado el nuevo pedido

  }
}
