import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-temperature',
  templateUrl: './body-temperature.component.html',
  styleUrls: ['./body-temperature.component.css']
})
export class BodyTemperatureComponent implements OnInit {
    // private data: number;
    // private getDT: GetDataInterfaceService = new GetDataInterfaceService();
    private data: string;
    public errorMessage: string = '';
    @Input() bodytemperature: string;
    constructor(
    ) {}

    ngOnInit() {
    }

}
