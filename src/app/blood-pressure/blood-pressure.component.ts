import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.css']
})
export class BloodPressureComponent implements OnInit {
    public data: number;
    public errorMessage: string = '';
    @Input() bloodpressure: number;
    ngOnInit() {
    }

}
