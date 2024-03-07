import { Libro } from '../../model/Libro';
import { LibrosService } from './../../service/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{
  libros:Libro[];
  constructor(private librosService:LibrosService){

  }
  ngOnInit(): void {
    this.catalogo();
  }
  catalogo():void{
    this.librosService.catalogo().subscribe(data=>this.libros=data);
  }


}
