import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsaitiComponent } from './asaiti.component';

describe('AsaitiComponent', () => {
  let component: AsaitiComponent;
  let fixture: ComponentFixture<AsaitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsaitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsaitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
