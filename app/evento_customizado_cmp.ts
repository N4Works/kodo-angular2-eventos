/// <reference path="../typings/tsd.d.ts" />

import {Component, View, EventEmitter, Directive, ElementRef, Inject} from 'angular2/angular2';

@Directive({
  selector: '[gabarito]',
  host: {
      '(input)': 'respostaHandler($event)'
  },
  outputs: ['respostaCerta', 'respostaErrada']
})
class RespostaDirective {
  respostaCerta: EventEmitter = new EventEmitter();
  respostaErrada: EventEmitter = new EventEmitter();

  constructor(@Inject(ElementRef) public elemento: ElementRef) {

  }

  respostaHandler() {
    if (this.elemento.nativeElement.value === "81") {
      this.respostaCerta.next({});
    }
    else {
      this.respostaErrada.next({});
    }
  }
}

@Component({
  selector: 'evento-customizado'
})
@View({
  template: `
    <hr/>
    <h3>GABARITO - Evento Customizado (de diretiva para componente)</h3>
    <label>9x9 é...</label>
    <input type="text" gabarito (resposta-certa)="aeeeee()" (resposta-errada)="erou()"/>
    <p [inner-text]="resultado" ></p>
  `,
  directives: [RespostaDirective]
})

export class EventoCustomizadoCmp {
  resultado: string = '';

  aeeeee() {
    this.resultado = 'Acertô, mizeravi!'
  }

  erou() {
    this.resultado = 'Ô loko, bicho! Erou!';
  }

}
