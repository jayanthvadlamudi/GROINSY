import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIDENAVComponent } from './sidenav.component';

describe('SIDENAVComponent', () => {
  let component: SIDENAVComponent;
  let fixture: ComponentFixture<SIDENAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIDENAVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SIDENAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
