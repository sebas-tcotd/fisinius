import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './pages/news/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsDataComponent } from './components/news-data/news-data.component';
import { NewsBodyComponent } from './components/news-body/news-body.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewsComponent, NewsDataComponent, NewsBodyComponent],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
  exports: [NewsComponent],
})
export class NewsModule {}
