import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAGGridComponent } from './test-aggrid.component';

describe('TestAGGridComponent', () => {
  let component: TestAGGridComponent;
  let fixture: ComponentFixture<TestAGGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAGGridComponent]
    });
    fixture = TestBed.createComponent(TestAGGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
