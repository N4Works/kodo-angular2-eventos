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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var RespostaDirective = (function () {
    function RespostaDirective(el) {
        this.respostaCerta = new angular2_1.EventEmitter();
        this.respostaErrada = new angular2_1.EventEmitter();
        this.elemento = el;
    }
    RespostaDirective.prototype.respostaHandler = function () {
        if (this.elemento.nativeElement.value === "81") {
            this.respostaCerta.next({});
        }
        else {
            this.respostaErrada.next({});
        }
    };
    RespostaDirective = __decorate([
        angular2_1.Directive({
            selector: '[gabarito]',
            host: {
                '(input)': 'respostaHandler($event)'
            },
            events: ['respostaCerta', 'respostaErrada'],
            bindings: [angular2_1.EventEmitter]
        }),
        __param(0, angular2_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], RespostaDirective);
    return RespostaDirective;
})();
var EventoCustomizadoCmp = (function () {
    function EventoCustomizadoCmp() {
        this.resultado = '';
    }
    EventoCustomizadoCmp.prototype.aeeeee = function () {
        this.resultado = 'Acertô, mizeravi!';
    };
    EventoCustomizadoCmp.prototype.erou = function () {
        this.resultado = 'Ô loko, bicho! Errou!';
    };
    EventoCustomizadoCmp = __decorate([
        angular2_1.Component({
            selector: 'evento-customizado'
        }),
        angular2_1.View({
            template: "\n    <hr/>\n    <h3>evento-customizado</h3>\n    <label>9x9 \u00E9...</label>\n    <input type=\"text\" gabarito (resposta-certa)=\"aeeeee()\" (resposta-errada)=\"erou()\"/>\n    <p [inner-text]=\"resultado\" ></p>\n  ",
            directives: [RespostaDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], EventoCustomizadoCmp);
    return EventoCustomizadoCmp;
})();
exports.EventoCustomizadoCmp = EventoCustomizadoCmp;
