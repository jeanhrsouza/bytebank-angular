import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  //tirar o dado e propagar para quem mandou
  // como é evento, é sempre dar nome de ação
  // EventEmmiter é a classe que consegue propagar os dados
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitado nova transferência');
    //emitindo um evento para propagar algo -> propavando um
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
  }
}
