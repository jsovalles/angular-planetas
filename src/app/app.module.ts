import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetasService} from './services/planetas.service';
import { RouterModule, Routes} from '@angular/router';
import { DetallePlanetaComponent } from './componentes/detalle-planeta/detalle-planeta.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { DetallePersonaComponent } from './componentes/detalle-persona/detalle-persona.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: '/planetas', pathMatch: 'full'},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'planetas/detalle/:id', component: DetallePlanetaComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/detalle/:id', component: DetallePersonaComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PlanetasComponent,
    DetallePlanetaComponent,
    PersonasComponent,
    DetallePersonaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
