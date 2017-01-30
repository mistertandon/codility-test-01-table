import {
    Injectable,
    OnInit
} from '@angular/core';

import {
    HeroClass
} from './../custom-classes/hero.class';

@Injectable()
export class HeroesService {

    private heroesName: [
        [string]
    ] = [
        ['1', 'Parvesh'],
        ['2', 'Praveen'],
        ['3', 'Prabhash'],
        ['4', 'Khatri'],
        ['5', 'Tandon']
    ];

    public getHeroesList_HSM(): any {

        return this.heroesName.map(heroInfo => new HeroClass(heroInfo[0], heroInfo[1]))
    }
}
