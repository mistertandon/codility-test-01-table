import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    PostComponent
} from './post.component';

const POSTS_ROUTES: Routes = [{
    path: 'posts',
    component: PostComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(POSTS_ROUTES)
    ],
    declarations: [PostComponent],
    exports: [RouterModule]

})
export class PostModule {}
