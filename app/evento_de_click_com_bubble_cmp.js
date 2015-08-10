/// <reference path="../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var ElementoFilhoCmp = (function () {
    function ElementoFilhoCmp() {
    }
    ElementoFilhoCmp.prototype.clickAconteceuAqui = function () {
        console.log('click aconteceu no elemento filho');
    };
    ElementoFilhoCmp = __decorate([
        angular2_1.Component({
            selector: 'elemento-filho-que-aconteceu-o-evento'
        }),
        angular2_1.View({
            template: "\n        <div style=\"padding: 5px; border: 1px solid #ddd; width: 250px;\">\n            <h5>elemento filho</h5>\n            <button type=\"button\"\n                (click)=\"clickAconteceuAqui()\">clique aqui</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ElementoFilhoCmp);
    return ElementoFilhoCmp;
})();
var EventoDeClickComBubbleCmp = (function () {
    function EventoDeClickComBubbleCmp() {
        this.logDoClick = '';
    }
    EventoDeClickComBubbleCmp.prototype.elementoPaiPegouOEvento = function () {
        this.logDoClick = "Fui clicado em: " + new Date() + ". O click aconteceu no elemento filho, mas o elemento pai eh quem tratou.";
    };
    EventoDeClickComBubbleCmp = __decorate([
        angular2_1.Component({
            selector: 'evento-de-click-com-bubble'
        }),
        angular2_1.View({
            template: "\n        <hr />\n        <h3>evento de click <strong>com</strong> bubble</h3>\n\n        <elemento-filho-que-aconteceu-o-evento (^click)=\"elementoPaiPegouOEvento()\"></elemento-filho-que-aconteceu-o-evento>\n\n        <p [inner-text]=\"logDoClick\"></p>\n    ",
            directives: [ElementoFilhoCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], EventoDeClickComBubbleCmp);
    return EventoDeClickComBubbleCmp;
})();
exports.EventoDeClickComBubbleCmp = EventoDeClickComBubbleCmp;
angular2_1.bootstrap(ElementoFilhoCmp);
