import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { FigmaDesignTranslatedImageEn1pngComponent } from './figma-design-translated-image-en1png/figma-design-translated-image-en1png.component';
import { FigmaDesignTranslatedImageEn1png1Component } from './figma-design-translated-image-en1png1/figma-design-translated-image-en1png1.component';
import { FigmaDesignTranslatedImageEnpngComponent } from './figma-design-translated-image-enpng/figma-design-translated-image-enpng.component';

export const routes: Routes = [
  { path: '', redirectTo: 'figma-design-translated-image-en1png1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'figma-design-translated-image-en1png', component: FigmaDesignTranslatedImageEn1pngComponent, data: { text: 'Figma design - translated_image_en (1).png' } },
  { path: 'figma-design-translated-image-en1png1', component: FigmaDesignTranslatedImageEn1png1Component, data: { text: 'Figma design - translated_image_en 1.png' } },
  { path: 'figma-design-translated-image-enpng', component: FigmaDesignTranslatedImageEnpngComponent, data: { text: 'Figma design - translated_image_en.png' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
