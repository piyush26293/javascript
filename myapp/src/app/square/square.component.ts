import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  // rando: number | undefined;

  // constructor(){
  //   setInterval(()=> this.rando = Math.random(),500 )
  // }

  @Input() value: 'X' | 'O' | undefined;

}
