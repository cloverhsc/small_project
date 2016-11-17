import { Component, OnInit } from '@angular/core';

import {GetDataInterfaceService} from '../get-data-interface.service';

import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit {

    data: number = 0;
    userData: User[];
    jsn: string;
    errorMessage: string = '';
    private subs;
    /*public source = Observable.range(2, 2).flatMap(function(y){
        return Observable.range(y, 2); });*/
        public source = Observable.range(1, 2).map((x) => x.toString());

    constructor(
        private dataService: GetDataInterfaceService
    ) { }

    getData() {
        this.subs = this.dataService.getUserData().subscribe(
            (data) => this.userData = data,
            (error) => this.errorMessage = error
        );
    }
    cancelGet() {
        this.subs.unsubscribe();
    }
    getInterval() {
        this.dataService.tryIntervalData().subscribe(
            (data) => this.jsn = data,
            (error) => this.errorMessage = error
        )
    }

    tryFlatMap() {
        this.source.subscribe(
            x => console.log('Next: ' + x));
    }

    ngOnInit() {
    }

}
