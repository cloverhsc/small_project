import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breath',
  templateUrl: './breath.component.html',
  styleUrls: ['./breath.component.css']
})
export class BreathComponent implements OnInit {
    // private data: number;
    // private getDT: GetDataInterfaceService = new GetDataInterfaceService();
    private data: number;
    public errorMessage: string = '';
    @Input() breath: number;
    constructor(
    ) {}

    ngOnInit() {
    }

}
