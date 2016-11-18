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
    errorMessage: string = '';
    private subs;

    constructor(
        private dataService: GetDataInterfaceService
    ) {}

    getData() {
        this.subs = this.dataService.getUserData().subscribe(
            (data) => this.userData = data,
            (error) => this.errorMessage = error
        );
    }

    ngOnInit() {
        this.getData();
    }
}
