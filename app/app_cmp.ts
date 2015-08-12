/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {EventoDeClickSemBubbleCmp} from 'app/evento_de_click_sem_bubble_cmp.js';
import {EventoDeClickComBubbleCmp} from 'app/evento_de_click_com_bubble_cmp.js';
import {EventoDeInputComBubbleCmp} from 'app/evento_de_input_com_bubble_diretiva_cmp.js';

@Component({
    selector: 'app'
})
@View({
    template: `
        <h1>Eventos no Angular2</h1>
        <evento-de-click-sem-bubble></evento-de-click-sem-bubble>
        <evento-de-click-com-bubble></evento-de-click-com-bubble>
        <evento-de-input-com-bubble></evento-de-input-com-bubble>
    `,
    directives: [EventoDeClickSemBubbleCmp, EventoDeClickComBubbleCmp, EventoDeInputComBubbleCmp]
})

export class AppCmp {
    constructor() {
        console.log('app inicializada');
    }
}

Promise.all([ bootstrap(EventoDeClickSemBubbleCmp),
              bootstrap(EventoDeClickComBubbleCmp),
              bootstrap(EventoDeInputComBubbleCmp) ])
       .then(() => console.log('bootstrap da app feita corretamente'))
       .catch((erro) => console.log(`erro durante bootstrap da app: ${erro}`));
