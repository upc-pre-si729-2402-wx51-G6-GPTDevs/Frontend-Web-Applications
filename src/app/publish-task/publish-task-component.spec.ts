import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTaskComponent } from './publish-task.component';

describe('PublishTaskComponent', () => {
  let component: PublishTaskComponent;
  let fixture: ComponentFixture<PublishTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
