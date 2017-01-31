import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute,
    Router,
    Params
} from '@angular/router';

import "rxjs/add/operator/switchMap";

import {
    HeroClass
} from './../custom-classes/hero.class';

import {
    HeroesService
} from './../custom-services/heroes.service';

@Component({
    templateUrl: "app/ts/heroes/hero-detail.component.html",
    styleUrls: ["app/ts/heroes/hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {

    public hero: HeroClass;

    public constructor(private HeroesService_S: HeroesService, private ActivatedRoute_S: ActivatedRoute, private Router_S: Router) {

    }

    ngOnInit(): void {

        this.ActivatedRoute_S.params
            .switchMap(

                (urlParams: Params) =>
                this.HeroesService_S.getHeroDetailById_HSM(urlParams['id'])

            ).subscribe((heroInfo: HeroClass) => {

                this.hero = heroInfo
            });

    }

    public renderHeroListComponent_HDCM(): void {

        let heroId: number | string = (this.hero) ? this.hero.id : null;

        this.Router_S.navigate(['/heroeslist', {
            id: heroId
        }]);

    }
}
