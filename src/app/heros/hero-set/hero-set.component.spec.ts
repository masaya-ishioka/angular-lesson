import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSetComponent } from './hero-set.component';

describe('HeroSetComponent', () => {
  let component: HeroSetComponent;
  let fixture: ComponentFixture<HeroSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
