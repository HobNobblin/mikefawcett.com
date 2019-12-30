import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

    ageYear: Number = 1978;
    ageMonth: Number = 6;
    ageDay: Number = 2;
    age: Number = 0;

    constructor() { }

    ngOnInit() {
        let year: Number = (new Date()).getFullYear();
        let month: Number = (new Date()).getMonth() + 1;
        let day: Number = (new Date()).getDate();

        if( month > 7 || (month == 6 && day > 2) ) {
            this.age = year - 1978;
        } else {
            this.age = year - 1979;
        }
    }

}
