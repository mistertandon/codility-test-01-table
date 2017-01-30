import {
    Component,
    OnInit
} from '@angular/core';

import {
    Router
} from '@angular/router';

import {
    HeroClass
} from './../custom-classes/hero.class';

import {
    HeroesService
} from './../custom-services/heroes.service';

@Component({
    templateUrl: "app/ts/heroes/heroes-list.component.html",
    styleUrls: ["app/ts/heroes/heroes-list.component.css"],
})
export class HeroesListComponent implements OnInit {

    /**
     * Here we are injecting HeroesService into class private proerty
     * HEROES_S.
     *
     **/
    public constructor(private HEROES_S: HeroesService, private Router_S: Router) {}

    public heroesList: any;

    ngOnInit(): void {
        /**
         * Getting heroesNameArr from HeroesService ans assign it to
         * heroesList variable;
         *
         **/
        this.heroesList = this.HEROES_S.getHeroesList_HSM();
    }

    public renderHeroDetailInfo_HLCM(hero: HeroClass): void {

        this.Router_S.navigate(['/herodetail', hero.id]);
    }


}




