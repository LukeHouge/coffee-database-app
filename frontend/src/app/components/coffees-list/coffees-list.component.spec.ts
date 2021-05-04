import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeesListComponent } from './coffees-list.component';

describe('CoffeesListComponent', () => {
  let component: CoffeesListComponent;
  let fixture: ComponentFixture<CoffeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
