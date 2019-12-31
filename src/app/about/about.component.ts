import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

    ageYear: number = 1978;
    ageMonth: number = 6;
    ageDay: number = 2;
    age: number = 0;

    constructor() { }

    ngOnInit() {
        let year: number = (new Date()).getFullYear();
        let month: number = (new Date()).getMonth() + 1;
        let day: number = (new Date()).getDate();

        if( month > 7 || (month == 6 && day > 2) ) {
            this.age = year - 1978;
        } else {
            this.age = year - 1979;
        }
    }

}
