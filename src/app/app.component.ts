import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FigmaDesignTranslatedImageEn1pngComponent } from './figma-design-translated-image-en1png/figma-design-translated-image-en1png.component';
import { FigmaDesignTranslatedImageEn1png1Component } from './figma-design-translated-image-en1png1/figma-design-translated-image-en1png1.component';
import { FigmaDesignTranslatedImageEnpngComponent } from './figma-design-translated-image-enpng/figma-design-translated-image-enpng.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
