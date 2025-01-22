import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarexploreComponent } from './carexplore.component';

describe('CarexploreComponent', () => {
  let component: CarexploreComponent;
  let fixture: ComponentFixture<CarexploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarexploreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
