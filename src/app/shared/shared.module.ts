import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';
import { RouterModule } from '@angular/router';
import { HeadlineComponent } from './components/headline/headline.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImgNewsPipe,
    HeadlineComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, ImgNewsPipe, HeadlineComponent, FooterComponent],
})
export class SharedModule {}
