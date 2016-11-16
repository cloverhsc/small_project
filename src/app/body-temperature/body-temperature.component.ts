import { Component, OnInit } from '@angular/core';

import {GetDataInterfaceService} from '../get-data-interface.service';

@Component({
  selector: 'app-body-temperature',
  templateUrl: './body-temperature.component.html',
  styleUrls: ['./body-temperature.component.css']
})
export class BodyTemperatureComponent implements OnInit {
    // private data: number;
    // private getDT: GetDataInterfaceService = new GetDataInterfaceService();
    private data: number = 0;
    constructor(
    ) {}

    ngOnInit() {
        // setInterval(
        //     () => this.data = this.getDT.getData()
        // , 3000);
    }

}
