import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFightComponent } from './hero-fight.component';

describe('HeroFightComponent', () => {
  let component: HeroFightComponent;
  let fixture: ComponentFixture<HeroFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
