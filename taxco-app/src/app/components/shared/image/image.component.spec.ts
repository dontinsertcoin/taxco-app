import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Image } from './image.component';

describe('Image', () => {
  let component: Image;
  let fixture: ComponentFixture<Image>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image ],
      providers: [
        {provide: 'imagePath', useValue: 'someValue'},
        {provide: 'title', useValue: 'someValue'},
        {provide: 'type', useValue: 'someValue'}
      ]
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
