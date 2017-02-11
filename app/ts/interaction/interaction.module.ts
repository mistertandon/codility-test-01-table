import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesService } from './../custom-services/heroes.service';
import { InteractionComponent } from './../interaction/interaction.component';
import { Demo1ParentComoponent } from './demo-1-parent.comoponent';
import { Demo1ChildComoponent } from './demo-1-child.comoponent';
import { Demo2ChildComoponent } from './demo-2-child.comoponent';

const INERACTION_ROUTES: Routes = [
	{
		path: 'interaction',
		component: InteractionComponent,
		children: [{
			path: 'demo1',
			component: Demo1ParentComoponent
		}]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(INERACTION_ROUTES),
		CommonModule
	],
	declarations: [
		InteractionComponent,
		Demo1ParentComoponent,
		Demo1ChildComoponent,
		Demo2ChildComoponent
	],
	exports: [RouterModule],
	providers: [HeroesService]
})
export class InteractionModule {

}
