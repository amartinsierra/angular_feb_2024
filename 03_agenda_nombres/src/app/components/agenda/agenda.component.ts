import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombres:string[]=[];//lista JSON de cadenas vacía
  nombre:string="";//guarda el nombre introducido en el campo de texto
  nombreSel:string="";//guarda el nombre seleccionado
  guardar():void{
    this.nombres.push(this.nombre);
  }
  eliminar():void{
    //recorre array y elimina el nombre que coincide con el seleccionado
    for(let i=0;i<this.nombres.length;i++){
      if(this.nombres[i]==this.nombreSel){
        this.nombres.splice(i,1);
      }
    }
  }

}
