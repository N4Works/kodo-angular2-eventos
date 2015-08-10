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
var AppCmp = (function () {
    function AppCmp() {
        console.log('app inicializada');
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n        <h1>Eventos no Angular2</h1>\n        <evento-de-click-sem-bubble></evento-de-click-sem-bubble>\n        <evento-de-click-com-bubble></evento-de-click-com-bubble>\n    ",
            directives: [evento_de_click_sem_bubble_cmp_js_1.EventoDeClickSemBubbleCmp, evento_de_click_com_bubble_cmp_js_1.EventoDeClickComBubbleCmp]
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
Promise.all([angular2_1.bootstrap(evento_de_click_sem_bubble_cmp_js_1.EventoDeClickSemBubbleCmp),
    angular2_1.bootstrap(evento_de_click_com_bubble_cmp_js_1.EventoDeClickComBubbleCmp)])
    .then(function () { return console.log('bootstrap da app feita corretamente'); })
    .catch(function (erro) { return console.log("erro durante bootstrap da app: " + erro); });
