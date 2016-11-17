import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/throw';


// import { MYDATA }   from './mock-data';
// import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class GetDataInterfaceService {
    private dataUrl = 'http://localhost:8000/api/posts/';
    public dt = [ 'A', 'B', 'C', 'D', 'E', 'F'];
    // constructor(private http: Http) { }
    constructor(
        private jsonp: Jsonp,
        private http: Http
    ) { }

    /*getUserData(): Observable<User[]> {
        return this.http.get(this.dataUrl)
            .map((res: Response) => res.json()).catch(this.handleError);
    }*/

    getUserData(): Observable<User[]> {
        return Observable.interval(3000).concatMap(() => this.http.get(this.dataUrl)
            .map((res: Response) => res.json()).catch(this.handleError));
    }

    // Try Observable interval property
    tryIntervalData() {
        return Observable.interval(1000).map(() => {
            let i = Math.floor((Math.random() * 10 + 1 ) % 6 );
            return this.dt[i];
        });
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
