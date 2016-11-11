/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeartBeatComponent } from './heart-beat.component';

describe('HeartBeatComponent', () => {
  let component: HeartBeatComponent;
  let fixture: ComponentFixture<HeartBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
