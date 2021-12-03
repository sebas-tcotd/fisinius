import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';
import { RouterModule } from '@angular/router';
import { HeadlineComponent } from './components/headline/headline.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImgNewsPipe,
    HeadlineComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    ImgNewsPipe,
    HeadlineComponent,
    FooterComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
