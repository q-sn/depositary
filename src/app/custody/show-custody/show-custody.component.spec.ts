import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustodyComponent } from './show-custody.component';

describe('ShowCustodyComponent', () => {
  let component: ShowCustodyComponent;
  let fixture: ComponentFixture<ShowCustodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
