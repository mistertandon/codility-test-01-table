import {
    Component,
    HostBinding
} from '@angular/core';

@Component({
    templateUrl: "app/ts/contact/contact-message.component.html",
    styleUrls: ["app/ts/contact/contact-message.component.css"],
    styles: [':host { position: relative; bottom: 25%; }']
})
export class ContactMessageComponent {
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    public constructor() {

    }

}
