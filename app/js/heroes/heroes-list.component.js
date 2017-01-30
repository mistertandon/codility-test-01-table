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
var heroes_service_1 = require('./../custom-services/heroes.service');
var HeroesListComponent = (function () {
    /**
     * Here we are injecting HeroesService into class private proerty
     * HEROES_S.
     *
     **/
    function HeroesListComponent(HEROES_S) {
        this.HEROES_S = HEROES_S;
    }
    HeroesListComponent.prototype.ngOnInit = function () {
        /**
         * Getting heroesNameArr from HeroesService ans assign it to
         * heroesList variable;
         *
         **/
        this.heroesList = this.HEROES_S.getHeroesList_HSM();
    };
    HeroesListComponent = __decorate([
        core_1.Component({
            templateUrl: "app/ts/heroes/heroes-list.component.html",
            styleUrls: ["app/ts/heroes/heroes-list.component.css"],
            providers: [heroes_service_1.HeroesService],
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService])
    ], HeroesListComponent);
    return HeroesListComponent;
}());
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=heroes-list.component.js.map