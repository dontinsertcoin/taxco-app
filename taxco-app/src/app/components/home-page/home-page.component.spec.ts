import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
declare let L;

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent, CarouselComponent ],
      imports: [ 
        Ng4TwitterTimelineModule,
        NgbModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the coordinates', () => {
    expect(component.latitude).toEqual(40.3949902);
    expect(component.longitude).toEqual(-3.7335585);
  })
});
