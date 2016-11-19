import { Component, OnInit } from '@angular/core';
import {GetDataInterfaceService} from './get-data-interface.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Biotrump';
    userData: User;
    userData1: User;
    errorMessage: string = '';
    errorMessage1: string = '';
    private subs;
    private subs1;

    constructor(
        private dataService: GetDataInterfaceService
    ) {}

    getData() {
        this.subs = this.dataService.getUserData().subscribe(
            (data) => this.userData = data,
            (error) => this.errorMessage = error
        );

        this.subs1 = this.dataService.getUserData().subscribe(
            (data) => this.userData1 = data,
            (error) => this.errorMessage1 = error
        )
    }

    ngOnInit() {
        this.getData();
    }
}
