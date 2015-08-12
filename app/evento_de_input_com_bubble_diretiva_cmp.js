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
var EventoDeInputComBubbleDiretiva = (function () {
    function EventoDeInputComBubbleDiretiva() {
    }
    EventoDeInputComBubbleDiretiva.prototype.inputHandlerDiretiva = function () {
        console.log('diretiva chamada');
    };
    EventoDeInputComBubbleDiretiva = __decorate([
        angular2_1.Directive({
            selector: '[diretiva-qualquer]',
            host: {
                '(input)': 'inputHandlerDiretiva()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], EventoDeInputComBubbleDiretiva);
    return EventoDeInputComBubbleDiretiva;
})();
var EventoDeInputComBubbleCmp = (function () {
    function EventoDeInputComBubbleCmp() {
        this.logDoInput = '';
    }
    EventoDeInputComBubbleCmp.prototype.inputHandlerCmp = function () {
        this.logDoInput = "Input aconteceu em: " + new Date();
    };
    EventoDeInputComBubbleCmp = __decorate([
        angular2_1.Component({
            selector: 'evento-de-input-com-bubble'
        }),
        angular2_1.View({
            template: "\n        <hr />\n        <h3>Input - Com bubble</h3>\n        <input type=\"text\" diretiva-qualquer (input)=\"inputHandlerCmp()\"/>\n        <p [inner-text]=\"logDoInput\"></p>\n    ",
            directives: [EventoDeInputComBubbleDiretiva]
        }), 
        __metadata('design:paramtypes', [])
    ], EventoDeInputComBubbleCmp);
    return EventoDeInputComBubbleCmp;
})();
exports.EventoDeInputComBubbleCmp = EventoDeInputComBubbleCmp;
