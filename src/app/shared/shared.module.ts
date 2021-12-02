import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';

@NgModule({
  declarations: [HeaderComponent, ImgNewsPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, ImgNewsPipe],
})
export class SharedModule {}
