import { Component } from '@angular/core';
import { Persona } from '../model/Persona';

@Component({
  selector: 'app-ficha-component',
  templateUrl: './ficha-component.component.html',
  styleUrl: './ficha-component.component.css'
})
export class FichaComponentComponent {
  persona:Persona;
  resultado:string="";
  constructor(){
    this.persona=new Persona();
  }
  grabar():void{
    this.resultado="Te llamas "+this.persona.nombre+" tienes "+this.persona.edad+" años";
    this.resultado+=" y eres del departamento "+this.persona.departamento;
  }
}
