import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGINFORMComponent } from './loginform.component';

describe('LOGINFORMComponent', () => {
  let component: LOGINFORMComponent;
  let fixture: ComponentFixture<LOGINFORMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGINFORMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOGINFORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
