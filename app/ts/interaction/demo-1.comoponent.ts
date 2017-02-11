import { Component, OnInit } from '@angular/core';
import { HeroClass } from './../custom-classes/hero.class';
import { HeroesService } from './../custom-services/heroes.service';

@Component({
	templateUrl: "app/ts/interaction/demo-1.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-1.comoponent.css"]
})
export class Demo1Comoponent implements OnInit {

	public selectedHero: HeroClass;
	public heroes: HeroClass[];
	public constructor(private HeroesService_S: HeroesService) {

	}
	ngOnInit(): void {

		this.HeroesService_S.getHeroesList_HSM().then((HeroesList: HeroClass[]) => {

			this.heroes = HeroesList;
		});
	}
	/**
	 * This function triggers, when user click on particular hero listed on
	 * heroes list. And we store the selected hero info into `selectedHero`
	 * property.
	 */
	selectHero(hero: HeroClass): void {
console.log(hero);
		this.selectedHero = hero;
	}

}






