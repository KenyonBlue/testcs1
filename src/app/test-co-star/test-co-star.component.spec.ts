import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoStarComponent } from './test-co-star.component';

describe('TestCoStarComponent', () => {
  let component: TestCoStarComponent;
  let fixture: ComponentFixture<TestCoStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCoStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
