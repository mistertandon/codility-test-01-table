import {
    Component,
    OnInit
} from '@angular/core';

import {
    HeroClass
} from './../custom-classes/hero.class';

import {
    HeroesService
} from './../custom-services/heroes.service';

@Component({
    templateUrl: "app/ts/heroes/heroes-list.component.html",
    styleUrls: ["app/ts/heroes/heroes-list.component.css"],
    providers: [HeroesService],
})
export class HeroesListComponent implements OnInit {
		
		/**
		 * Here we are injecting HeroesService into class private proerty
		 * HEROES_S.
		 *
		 **/
    public constructor(private HEROES_S: HeroesService) {}

    public heroesList: any;

    ngOnInit(): void {
				/**
				 * Getting heroesNameArr from HeroesService ans assign it to
				 * heroesList variable;
				 *
				 **/
        this.heroesList = this.HEROES_S.getHeroesList_HSM();
    }
}
