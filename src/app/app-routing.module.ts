import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'section',
    loadChildren: () =>
      import('./modules/sections/sections.module').then(
        (m) => m.SectionsModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
