import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SALESComponent } from './sales.component';

describe('SALESComponent', () => {
  let component: SALESComponent;
  let fixture: ComponentFixture<SALESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SALESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SALESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
