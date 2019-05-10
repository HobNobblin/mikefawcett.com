import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MikefawcettComApiService } from '../_services/mikefawcett-com-api.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    messageForm: FormGroup;
    submitted: boolean = false;
    success: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private mfcApi: MikefawcettComApiService
    ) { 
    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    sendMessage() {
        this.submitted = true;

	if( this.messageForm.invalid ) {
	    return;
	}

        let body = {
	    "name": this.messageForm.controls.name.value,
	    "phone": this.messageForm.controls.phone.value,
	    "email": this.messageForm.controls.email.value,
	    "message": this.messageForm.controls.message.value,
	}

	this.mfcApi.sendContactMessage(body).subscribe(
	    res => { 
            },
	    (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    //A client-side or network error occurred.				 
                } else {
                    //Backend returns unsuccessful response codes such as 404, 500 etc. 
                }
            }
        );

	this.success = true;
    }

}
