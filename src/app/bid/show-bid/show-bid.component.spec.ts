import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBidComponent } from './show-bid.component';

describe('ShowBidComponent', () => {
  let component: ShowBidComponent;
  let fixture: ComponentFixture<ShowBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
