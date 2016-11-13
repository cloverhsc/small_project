import { Component } from '@angular/core';

import { mockdata } from './bio-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Biotrump';

    /*showTime() {
        let myval = setInterval(()=>{
            if(this.i <= (this.count -1 ))
            {
                this.val = this.a[this.i];
                this.i++;
            }
            else
            {
                clearInterval(myval);
            }
        }, 3000);
    };*/
    //.map(function(){return Math.floor(Math.random()*10+1);})
    dt = [...new Array(10)]
        .fill(1).map(function(){return Math.floor(Math.random()*10+1);});

    showDT(){
        console.log(this.dt);
    }
}
