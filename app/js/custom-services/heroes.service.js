"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_class_1 = require('./../custom-classes/hero.class');
var HeroesService = (function () {
    function HeroesService() {
        this.heroesName = [
            ['1', 'Parvesh'],
            ['2', 'Praveen'],
            ['3', 'Prabhash'],
            ['4', 'Khatri'],
            ['5', 'Tandon']
        ];
    }
    HeroesService.prototype.getHeroesList_HSM = function () {
        return this.heroesName.map(function (heroInfo) { return new hero_class_1.HeroClass(heroInfo[0], heroInfo[1]); });
    };
    HeroesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroesService);
    return HeroesService;
}());
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map