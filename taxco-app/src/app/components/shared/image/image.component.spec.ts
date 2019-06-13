import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image } from './image.component';

describe('ImageComponent', () => {
  let component: Image;
  let fixture: ComponentFixture<Image>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
