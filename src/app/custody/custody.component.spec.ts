import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodyComponent } from './custody.component';

describe('CustodyComponent', () => {
  let component: CustodyComponent;
  let fixture: ComponentFixture<CustodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
