import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CienciaComponent } from './pages/ciencia/ciencia.component';
import { DeporteComponent } from './pages/deporte/deporte.component';
import { PoliticsComponent } from './pages/politics/politics.component';
import { SaludComponent } from './pages/salud/salud.component';
import { SectionsComponent } from './pages/sections/sections.component';

const routes: Routes = [
  {
    path: '',
    component: SectionsComponent,
    children: [
      { path: 'ciencia', component: CienciaComponent },
      { path: 'deporte', component: DeporteComponent },
      { path: 'politica', component: PoliticsComponent },
      { path: 'salud', component: SaludComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule {}
