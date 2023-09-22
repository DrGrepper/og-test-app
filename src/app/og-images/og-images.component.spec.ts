import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgImagesComponent } from './og-images.component';

describe('OgImagesComponent', () => {
  let component: OgImagesComponent;
  let fixture: ComponentFixture<OgImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OgImagesComponent]
    });
    fixture = TestBed.createComponent(OgImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
