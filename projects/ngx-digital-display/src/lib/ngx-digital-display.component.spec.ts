import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDigitalDisplayComponent } from './ngx-digital-display.component';

describe('NgxDigitalDisplayComponent', () => {
  let component: NgxDigitalDisplayComponent;
  let fixture: ComponentFixture<NgxDigitalDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDigitalDisplayComponent]
    });
    fixture = TestBed.createComponent(NgxDigitalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
