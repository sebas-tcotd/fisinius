import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import { PoliticsComponent } from './pages/politics/politics.component';
import { SaludComponent } from './pages/salud/salud.component';
import { DeporteComponent } from './pages/deporte/deporte.component';
import { CienciaComponent } from './pages/ciencia/ciencia.component';
import { SectionsComponent } from './pages/sections/sections.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PoliticsComponent,
    SaludComponent,
    DeporteComponent,
    CienciaComponent,
    SectionsComponent,
  ],
  imports: [CommonModule, SectionsRoutingModule, SharedModule],
  exports: [SectionsComponent],
})
export class SectionsModule {}
