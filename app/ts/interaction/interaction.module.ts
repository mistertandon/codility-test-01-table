import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionComponent } from './../interaction/interaction.component';

const INERACTION_ROUTES: Routes = [
	{
		path: 'interaction',
		component: InteractionComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(INERACTION_ROUTES)],
	declarations: [InteractionComponent],
	exports: [RouterModule]
})
export class InteractionModule {

}
