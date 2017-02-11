import { Component, Input } from '@angular/core';
import { HeroClass } from './../custom-classes/hero.class';

@Component({
	selector: "demo-1-child",
	templateUrl: "app/ts/interaction/demo-1-child.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-1-child.comoponent.css"]
})
export class Demo1ChildComoponent {

	public _heroId: number;
	@Input()
	public heroRef: HeroClass;

	@Input()
	set heroId(heroIdParam: number) {

		this._heroId = heroIdParam;
	}
	public constructor() {

	}

}




















