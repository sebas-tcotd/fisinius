import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ImgNewsPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, ImgNewsPipe],
})
export class SharedModule {}
