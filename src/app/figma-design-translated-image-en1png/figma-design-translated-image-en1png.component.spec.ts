import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaDesignTranslatedImageEn1pngComponent } from './figma-design-translated-image-en1png.component';

describe('FigmaDesignTranslatedImageEn1pngComponent', () => {
  let component: FigmaDesignTranslatedImageEn1pngComponent;
  let fixture: ComponentFixture<FigmaDesignTranslatedImageEn1pngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaDesignTranslatedImageEn1pngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigmaDesignTranslatedImageEn1pngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
