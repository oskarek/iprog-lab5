import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDinnerComponent } from './create-new-dinner.component';

describe('CreateNewDinnerComponent', () => {
  let component: CreateNewDinnerComponent;
  let fixture: ComponentFixture<CreateNewDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
