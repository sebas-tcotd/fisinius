import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ImgNewsPipe } from './pipes/img-news.pipe';
import { RouterModule } from '@angular/router';
import { HeadlineComponent } from './components/headline/headline.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { A11yModalComponent } from './components/a11y-modal/a11y-modal.component';
import { A11yFormComponent } from './components/a11y-modal/a11y-form/a11y-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImgNewsPipe,
    HeadlineComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent,
    A11yModalComponent,
    A11yFormComponent,
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
