import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: false
})

export class NavComponent implements OnInit {

    appTitle: string = 'Mike Fawcett';

    constructor() { }

    ngOnInit() {
    }

}
