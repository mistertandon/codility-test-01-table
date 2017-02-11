import { Component, Input } from '@angular/core';

@Component({
	selector: "demo-2-child",
	templateUrl: "app/ts/interaction/demo-2-child.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-2-child.comoponent.css"]
})
export class Demo2ChildComoponent {

	/**
	 * `minor` variable contains major version value.
	 */
	@Input()
	public minor: number;

	/**
	 * `major` variable contains major version value.
	 */
	@Input()
	public major: number;

	public constructor() {

	}

}




















