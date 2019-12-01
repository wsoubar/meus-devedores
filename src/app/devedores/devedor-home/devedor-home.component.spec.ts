import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevedorHomeComponent } from './devedor-home.component';

describe('DevedorHomeComponent', () => {
  let component: DevedorHomeComponent;
  let fixture: ComponentFixture<DevedorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevedorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevedorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
