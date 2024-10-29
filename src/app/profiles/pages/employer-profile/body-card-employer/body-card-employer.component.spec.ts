import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCardEmployerComponent } from './body-card-employer.component';

describe('BodyCardEmployerComponent', () => {
  let component: BodyCardEmployerComponent;
  let fixture: ComponentFixture<BodyCardEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCardEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCardEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
