import { Component, OnInit } from '@angular/core';
import { HeroClass } from './../custom-classes/hero.class';
import { HeroesService } from './../custom-services/heroes.service';

@Component({
	templateUrl: "app/ts/interaction/demo-1-parent.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-1-parent.comoponent.css"]
})
export class Demo1ParentComoponent implements OnInit {
	/**
	 * `selectedHero` used to store selected hero info listed on heroes list.
	 */
	public selectedHero: HeroClass;
	/**
	 * `heroes` contains all heroes information in a array.
	 */
	public heroes: HeroClass[];
	public constructor(private HeroesService_S: HeroesService) {

	}
	ngOnInit(): void {

		this.HeroesService_S.getHeroesList_HSM().then((HeroesList: HeroClass[]) => {

			this.heroes = HeroesList;
		});
	}

	/**
	 * `selectHero` triggers when user click on particular hero listed on
	 * heroes list page.
	 */
	selectHero(heroDetail: HeroClass): void {

		this.selectedHero = heroDetail;
	}
}






