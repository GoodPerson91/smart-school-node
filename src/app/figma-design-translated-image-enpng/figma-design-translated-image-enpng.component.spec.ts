import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaDesignTranslatedImageEnpngComponent } from './figma-design-translated-image-enpng.component';

describe('FigmaDesignTranslatedImageEnpngComponent', () => {
  let component: FigmaDesignTranslatedImageEnpngComponent;
  let fixture: ComponentFixture<FigmaDesignTranslatedImageEnpngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaDesignTranslatedImageEnpngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigmaDesignTranslatedImageEnpngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
