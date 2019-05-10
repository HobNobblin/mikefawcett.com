import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MikefawcettComApiService {

    public httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json'
    });

    constructor(
        private http: HttpClient
    ) {
    }

    sendContactMessage(body?: any, extraHttpRequestParams?: string): Observable<HttpResponse<any>> {
        const url = 'https://t0y5sq08c0.execute-api.us-east-1.amazonaws.com/Production/contact-message';

        let options = {
	    headers: this.httpHeaders
        };

        return this.http.post<any>(url, JSON.stringify(body), options);
    }

}
