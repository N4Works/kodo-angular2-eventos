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
var evento_de_click_sem_bubble_cmp_js_1 = require('app/evento_de_click_sem_bubble_cmp.js');
var evento_de_click_com_bubble_cmp_js_1 = require('app/evento_de_click_com_bubble_cmp.js');
var evento_de_input_com_bubble_diretiva_cmp_js_1 = require('app/evento_de_input_com_bubble_diretiva_cmp.js');
var evento_customizado_cmp_js_1 = require('./evento_customizado_cmp.js');
var AppCmp = (function () {
    function AppCmp() {
        console.log('app inicializada');
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n        <h1>Eventos no Angular2</h1>\n        <evento-de-click-sem-bubble></evento-de-click-sem-bubble>\n        <evento-de-click-com-bubble></evento-de-click-com-bubble>\n        <evento-de-input-com-bubble></evento-de-input-com-bubble>\n        <evento-customizado></evento-customizado>\n    ",
            directives: [evento_de_click_sem_bubble_cmp_js_1.EventoDeClickSemBubbleCmp, evento_de_click_com_bubble_cmp_js_1.EventoDeClickComBubbleCmp, evento_de_input_com_bubble_diretiva_cmp_js_1.EventoDeInputComBubbleCmp, evento_customizado_cmp_js_1.EventoCustomizadoCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
Promise.all([angular2_1.bootstrap(evento_de_click_sem_bubble_cmp_js_1.EventoDeClickSemBubbleCmp),
    angular2_1.bootstrap(evento_de_click_com_bubble_cmp_js_1.EventoDeClickComBubbleCmp),
    angular2_1.bootstrap(evento_de_input_com_bubble_diretiva_cmp_js_1.EventoDeInputComBubbleCmp),
    angular2_1.bootstrap(evento_customizado_cmp_js_1.EventoCustomizadoCmp)])
    .then(function () { return console.log('bootstrap da app feita corretamente'); })
    .catch(function (erro) { return console.log("erro durante bootstrap da app: " + erro); });
