import { Component, OnInit } from '@angular/core';

import {GetDataInterfaceService} from '../get-data-interface.service';

import { User } from '../user';


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

    constructor(
        private dataService: GetDataInterfaceService
    ) { }

    getData() {
        this.dataService.getUserData().subscribe(
            (data) => this.userData = data,
            (error) => this.errorMessage = error
        );
    }

    ngOnInit() {
    }

}
