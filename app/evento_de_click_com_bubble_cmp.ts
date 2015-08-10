/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'elemento-filho-que-aconteceu-o-evento'
})
@View({
    template: `
        <div style="padding: 5px; border: 1px solid #ddd; width: 250px;">
            <h5>elemento filho</h5>
            <button type="button"
                (click)="clickAconteceuAqui()">clique aqui</button>
        </div>
    `
})
class ElementoFilhoCmp {
    clickAconteceuAqui() {
        console.log('click aconteceu no elemento filho');
    }
}

@Component({
    selector: 'evento-de-click-com-bubble'
})
@View({
    template: `
        <hr />
        <h3>evento de click <strong>com</strong> bubble</h3>

        <elemento-filho-que-aconteceu-o-evento (^click)="elementoPaiPegouOEvento()"></elemento-filho-que-aconteceu-o-evento>

        <p [inner-text]="logDoClick"></p>
    `,
    directives: [ElementoFilhoCmp]
})

export class EventoDeClickComBubbleCmp {
    logDoClick: string = '';

    elementoPaiPegouOEvento() {
        this.logDoClick = `Fui clicado em: ${new Date()}. O click aconteceu no elemento filho, mas o elemento pai eh quem tratou.`;
    }
}

bootstrap(ElementoFilhoCmp);
