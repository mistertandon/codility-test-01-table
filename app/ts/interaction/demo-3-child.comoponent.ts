import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'demo-3-child',
	templateUrl: "app/ts/interaction/demo-3-child.comoponent.html",
	styleUrls: ["app/ts/interaction/demo-3-child.comoponent.css"]
})
export class Demo3ChildComoponent {

	@Output()
	public onVoted = new EventEmitter<boolean>();

	/**
	 * `hasVoted` variable contains flag to determine user put his vote or not.
	 */
	public hasVoted: boolean = false;
	/**
	 * `onVotedUp` emit onVoted event with `true` value
   */
	onVotedUp(): void {

		this.onVoted.emit(true);
		this.hasVoted = true;
	}

	/**
	 * `onVotedDown` emit onVoted event with `false` value
	 */
	onVotedDown(): void {

		this.onVoted.emit(false);
		this.hasVoted = true;
	}


}
