import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDoneComponent } from './work-done.component';

describe('WorkDoneComponent', () => {
  let component: WorkDoneComponent;
  let fixture: ComponentFixture<WorkDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
