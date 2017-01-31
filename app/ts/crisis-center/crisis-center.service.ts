import {
    Injectable
} from '@angular/core';

import {
    CrisisCenterClass
} from './../custom-classes/crisis-center.class';

@Injectable()
export class CrisisCenterService {

    public crisisInfoRef: CrisisCenterClass[] = [

        new CrisisCenterClass(1, 'Top 10 Hindi Movies 2016.'),
        new CrisisCenterClass(2, 'Top 10 Hindi Movies 2015.'),
        new CrisisCenterClass(3, 'Top 10 Bollywood Songs 2014.'),
        new CrisisCenterClass(4, 'Top 10 Bollywood Movies 2014.'),
        new CrisisCenterClass(5, 'Top 10 Bollywood Movies by Box Office Collection in India.'),
    ];

    public constructor() {

    }

		/**
		 * This function is used to retrieve crisis list.
		 *
		 **/
    public getCrisisCenterList(): Promise < CrisisCenterClass[] > {

        return Promise.resolve(this.crisisInfoRef);

    }
}
