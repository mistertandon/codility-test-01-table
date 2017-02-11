import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
	selector: "demo-2-child",
	templateUrl: "app/ts/interaction/demo-2-child.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-2-child.comoponent.css"]
})
export class Demo2ChildComoponent implements OnChanges {

	public logs: any[] = [];
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

	ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {

		var logs: any[] = [];

		for (let propKey in changes) {

			let changedProp: any = changes[propKey];
			let toValue: any = JSON.stringify(changedProp.currentValue);

			if (changedProp.isFirstChange()) {

				logs.push(`${toValue} assign to ${propKey}`);
			} else {

				let fromValue: any = JSON.stringify(changedProp.previousValue);

				logs.push(`${propKey} element Value changed from ${toValue} to ${fromValue}`);
			}

		}
		this.logs.push(JSON.stringify(logs));
	}
}




















