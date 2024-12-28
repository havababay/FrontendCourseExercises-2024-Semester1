import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonForm1Component } from './person-form1.component';

describe('PersonForm1Component', () => {
  let component: PersonForm1Component;
  let fixture: ComponentFixture<PersonForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
