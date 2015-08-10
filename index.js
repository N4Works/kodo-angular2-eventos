/// <reference path="typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var app_cmp_js_1 = require('app/app_cmp.js');
angular2_1.bootstrap(app_cmp_js_1.AppCmp)
    .then(function () { return console.log('index inicializada'); });
