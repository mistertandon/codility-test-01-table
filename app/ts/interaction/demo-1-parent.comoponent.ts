import { Component, OnInit } from '@angular/core';
import { HeroClass } from './../custom-classes/hero.class';
import { HeroesService } from './../custom-services/heroes.service';

@Component({
	templateUrl: "app/ts/interaction/demo-1-parent.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-1-parent.comoponent.css"]
})
export class Demo1ParentComoponent implements OnInit {

	/**
	 * `agreed` contains total votes in favor.
	 */
	public agreed: number = 0;
	/**
	 * `disagreed` contains total votes not in favor.
	 */
	public disagreed: number = 0;
	/**
	 * `selectedHero` used to store selected hero info listed on heroes list.
	 */
	public selectedHero: HeroClass;

	/**
	 * `majorVersion` contains major version information.
	 */
	public majorVersion: number = 0;

	/**
	 * `minorVersion` contains major version information.
	 */
	public minorVersion: number = 0;

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

	/**
	 * `increaseMajorVersion` function make increment of `majorVersion`by one.
	 */
	increaseMajorVersion(): void {

		this.majorVersion++;
		this.minorVersion = 0;
	}

	/**
	 * `increaseMinorVersion` function make increment of `minorVersion`by one.
	 */
	increaseMinorVersion(): void {

		this.minorVersion++;
	}

	/**
	 * `onVotedHandleParent` handle action result happend in child component.
	 */
	onVotedHandleParent(result: boolean) {

		(result) ? this.agreed++ : this.disagreed++;
	}
}






