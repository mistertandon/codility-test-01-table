import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesService } from './../custom-services/heroes.service';
import { InteractionComponent } from './../interaction/interaction.component';
import { Demo1Comoponent } from './demo-1.comoponent';

const INERACTION_ROUTES: Routes = [
	{
		path: 'interaction',
		component: InteractionComponent,
		children: [{
			path: 'demo1',
			component: Demo1Comoponent
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
		Demo1Comoponent
	],
	exports: [RouterModule],
	providers: [HeroesService]
})
export class InteractionModule {

}
