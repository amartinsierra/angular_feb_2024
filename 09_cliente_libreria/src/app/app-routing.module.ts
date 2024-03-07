import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AltaComponent } from './components/alta/alta.component';

const routes: Routes = [{
  path:"catalogo",
  component:CatalogoComponent
},
{
  path:"buscar",
  component: BuscarComponent
},
{
  path:"alta",
  component: AltaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
