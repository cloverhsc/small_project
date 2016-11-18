import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-heart-beat',
  templateUrl: './heart-beat.component.html',
  styleUrls: ['./heart-beat.component.css']
})
export class HeartBeatComponent implements OnInit {
    private data: number;
    public errorMessage: string = '';
    @Input() heartbeat: number;
    constructor() {
    }

    ngOnInit() {
    }

}
