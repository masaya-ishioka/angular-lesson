import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGetComponent } from './hero-get.component';

describe('HeroGetComponent', () => {
  let component: HeroGetComponent;
  let fixture: ComponentFixture<HeroGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
