import {
    Component,
    OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
    ActivatedRoute,
    Router,
    RouterModule,
    Params
} from '@angular/router';

import "rxjs/add/operator/switchMap";

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
    public constructor(private HEROES_S: HeroesService, private Router_S: Router, private ActivatedRoute_S: ActivatedRoute) { }

    public heroesList: Observable<HeroClass[]>;

    /**
     *	selectedHeroId: Id of the selected hero from heroes list.
     **/
    public selectedHeroId: number;

    ngOnInit(): void {

        /**
         * Getting heroesNameArr from HeroesService ans assign it to
         * heroesList variable;
         *
         **/
        this.heroesList = this.ActivatedRoute_S.params.switchMap((paramsInfo: Params) => {

            this.selectedHeroId = paramsInfo['id'];

            return this.HEROES_S.getHeroesList_HSM();

        });

    }

    /**
     * This function is used to navigate to hero-detail.component view.
     **/
    public renderHeroDetailInfo_HLCM(hero: HeroClass): void {

        this.Router_S.navigate(['/herodetail', hero.id]);
    }

    /**
     * This function is used to determine, is user made click on hero or not
     * recently on hero-list.component view.
     **/
    public isSelectedHero_HLCM(hero: HeroClass): boolean {

        return (hero.id == this.selectedHeroId) ? true : false;

    }


}
