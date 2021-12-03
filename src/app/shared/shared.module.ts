import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';
import { RouterModule } from '@angular/router';
import { HeadlineComponent } from './components/headline/headline.component';

@NgModule({
  declarations: [HeaderComponent, ImgNewsPipe, HeadlineComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, ImgNewsPipe, HeadlineComponent],
})
export class SharedModule {}
