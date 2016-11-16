import { Component, OnInit } from '@angular/core';

import {GetDataInterfaceService} from '../get-data-interface.service';

@Component({
  selector: 'app-heart-beat',
  templateUrl: './heart-beat.component.html',
  styleUrls: ['./heart-beat.component.css']
})
export class HeartBeatComponent implements OnInit {
    // private data: number;
    // private getDT: GetDataInterfaceService;
    private data: number = 0;
    constructor() {
        // this.getDT = new GetDataInterfaceService();
    }

    ngOnInit() {
        // setInterval(
        //     () => this.data = this.getDT.getData()
        // , 3000);
    }

}
