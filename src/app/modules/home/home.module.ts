import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HeadlineComponent } from './components/headline/headline.component';

@NgModule({
  declarations: [HomeComponent, HeadlineComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
