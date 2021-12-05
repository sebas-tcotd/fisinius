import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';
import { RouterModule } from '@angular/router';
import { HeadlineComponent } from './components/headline/headline.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImgNewsPipe,
    HeadlineComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    ImgNewsPipe,
    HeadlineComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent
  ],
})
export class SharedModule {}
