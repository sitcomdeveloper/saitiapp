import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaitiComponent } from './saiti.component';

describe('SaitiComponent', () => {
  let component: SaitiComponent;
  let fixture: ComponentFixture<SaitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
