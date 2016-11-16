import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// import { MYDATA }   from './mock-data';
// import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class GetDataInterfaceService {
    private dataUrl = 'http://localhost:8000/api/posts/';

    // constructor(private http: Http) { }
    constructor(
        private jsonp: Jsonp,
        private http: Http
    ) { }

    getUserData(): Observable<User[]> {
        return this.http.get(this.dataUrl)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }


    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
