import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDinnerComponent } from './my-dinner.component';

describe('MyDinnerComponent', () => {
  let component: MyDinnerComponent;
  let fixture: ComponentFixture<MyDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
