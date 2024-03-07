import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AltaComponent } from './components/alta/alta.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CatalogoComponent,
    BuscarComponent,
    AltaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule { }
