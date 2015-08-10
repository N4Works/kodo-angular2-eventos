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
var EventoDeClickSemBubbleCmp = (function () {
    function EventoDeClickSemBubbleCmp() {
        this.logDoClick = '';
    }
    EventoDeClickSemBubbleCmp.prototype.fuiClicado = function () {
        this.logDoClick = "Fui clicado em: " + new Date() + ". O click aconteceu no elemento pai (evento-de-click-sem-bubble)).";
    };
    EventoDeClickSemBubbleCmp = __decorate([
        angular2_1.Component({
            selector: 'evento-de-click-sem-bubble'
        }),
        angular2_1.View({
            template: "\n        <hr />\n        <h4>evento de click <strong>sem</strong> bubble</h4>\n\n        <button type=\"button\"\n                (click)=\"fuiClicado()\">clique aqui</button>\n\n        <p [inner-text]=\"logDoClick\"></p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EventoDeClickSemBubbleCmp);
    return EventoDeClickSemBubbleCmp;
})();
exports.EventoDeClickSemBubbleCmp = EventoDeClickSemBubbleCmp;
