import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeartBeatComponent } from './heart-beat/heart-beat.component';
import { BreathComponent } from './breath/breath.component';
import { BodyTemperatureComponent } from './body-temperature/body-temperature.component';
import { BloodPressureComponent } from './blood-pressure/blood-pressure.component';
import { BioDataComponent } from './bio-data/bio-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartBeatComponent,
    BreathComponent,
    BodyTemperatureComponent,
    BloodPressureComponent,
    BioDataComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
