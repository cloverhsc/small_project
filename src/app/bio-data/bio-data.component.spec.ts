/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BioDataComponent } from './bio-data.component';

describe('BioDataComponent', () => {
  let component: BioDataComponent;
  let fixture: ComponentFixture<BioDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
