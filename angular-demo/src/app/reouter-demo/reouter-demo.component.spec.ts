import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReouterDemoComponent } from './reouter-demo.component';

describe('ReouterDemoComponent', () => {
  let component: ReouterDemoComponent;
  let fixture: ComponentFixture<ReouterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReouterDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReouterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
