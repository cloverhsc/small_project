import { Component, OnInit } from '@angular/core';

import {GetDataInterfaceService} from '../get-data-interface.service';

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.css']
})
export class BreathComponent implements OnInit {
    private data: number;
    private getDT: GetDataInterfaceService = new GetDataInterfaceService();
    constructor(
    ) {}

    ngOnInit() {
        setInterval(
            () => this.data = this.getDT.getData()
        , 3000);
    }

}
