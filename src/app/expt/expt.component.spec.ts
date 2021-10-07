import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExptComponent } from './expt.component';

describe('ExptComponent', () => {
  let component: ExptComponent;
  let fixture: ComponentFixture<ExptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
