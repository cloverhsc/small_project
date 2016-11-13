import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Biotrump';
    private a: string[] = ['1', '2', '3', '4', '5'];

    private count: number = this.a.length;
    private val: string = 'clover';
    showTime() {
        let i: number = 0;
         setInterval(function(){
            // this.val = this.a[0];
            i++;
            console.log(this.a);
            console.log('Start');
            console.log('count: ' + this.count);
            console.log('i: ' + this.i);
            console.log('val: ' + this.val);
        }, 3000);
    };
}
