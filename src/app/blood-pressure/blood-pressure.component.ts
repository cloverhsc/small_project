import { Component, OnInit } from '@angular/core';

import {GetDataInterfaceService} from '../get-data-interface.service';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit {
    private data: number;
    private getDT: GetDataInterfaceService = new GetDataInterfaceService();
    constructor() {
    }

    ngOnInit() {
        setInterval(
            () => this.data = this.getDT.getData()
        , 3000);
    }

}
