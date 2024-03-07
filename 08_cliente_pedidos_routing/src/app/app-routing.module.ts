import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompraComponent } from './components/compra/compra.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {
    path:"compra",
    component:CompraComponent
  },
  {
    path:"pedidos",
    component:PedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
