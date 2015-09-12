/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'elemento-filho-que-aconteceu-o-evento'
})
@View({
    template: `
        <div style="padding: 5px; border: 1px solid #ddd; width: 450px;">
            <h4>elemento filho</h4>
            <button type="button"
                (click)="clickAconteceuAqui()">clique aqui</button>
            <p [inner-text]="logDoClick"></p>
        </div>
    `
})
class ElementoFilhoCmp {
    logDoClick: string = '';

    clickAconteceuAqui() {
        this.logDoClick = `Evento elemento filho: clicado em: ${new Date()}. O click aconteceu no elemento filho.`;
    }
}

@Component({
    selector: 'evento-de-click-com-bubble'
})
@View({
    template: `
        <hr />
        <h3>CLICK - <strong>com</strong> bubble</h3>

        <elemento-filho-que-aconteceu-o-evento (click)="elementoPaiPegouOEvento()"></elemento-filho-que-aconteceu-o-evento>

        <p [inner-text]="logDoClick"></p>
    `,
    directives: [ElementoFilhoCmp]
})

export class EventoDeClickComBubbleCmp {
    logDoClick: string = '';

    elementoPaiPegouOEvento() {
        this.logDoClick = `Evento bubbled para o elemento pai: clicado em: ${new Date()}. O click aconteceu no elemento filho.`;
    }
}

bootstrap(ElementoFilhoCmp);
