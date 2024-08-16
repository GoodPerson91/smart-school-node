import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaDesignTranslatedImageEn1png1Component } from './figma-design-translated-image-en1png1.component';

describe('FigmaDesignTranslatedImageEn1png1Component', () => {
  let component: FigmaDesignTranslatedImageEn1png1Component;
  let fixture: ComponentFixture<FigmaDesignTranslatedImageEn1png1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaDesignTranslatedImageEn1png1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigmaDesignTranslatedImageEn1png1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
