import { Component } from '@angular/core';
import { Pais } from '../../model/Pais';
import { PaisesService } from '../../service/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continentes:string[];
  paises:Pais[];
  continenteSel:string;

  constructor(private paisesService:PaisesService){
    this.cargaContinentes();
  }

  cargaContinentes():void{
    this.paisesService
    .continentes()
    .subscribe(data=>this.continentes=data);
  }
  cargaPaisesContinente():void{
    this.paisesService
    .paisesContinente(this.continenteSel)
    .subscribe(data=>this.paises=data);
  }

}
