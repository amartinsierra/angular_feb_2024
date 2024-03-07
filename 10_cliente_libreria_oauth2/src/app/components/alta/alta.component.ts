import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent implements OnInit{
  libro:Libro;
  tematicas:string[]
  constructor(private librosService:LibrosService, private router:Router){

  }
  ngOnInit(): void {
    this.libro=new Libro();
    this.cargarTematicas();
  }
  alta():void{
    this.librosService.nuevoLibro(this.libro).subscribe(data=>this.router.navigate(["/catalogo"]));

  }
  cargarTematicas():void{
    this.librosService.tematicas().subscribe(data=>this.tematicas=data);
  }
}
