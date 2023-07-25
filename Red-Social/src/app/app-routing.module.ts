import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { DetallesPublicacionComponent } from './components/detalles-publicacion/detalles-publicacion.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'crear-publicacion',component:CrearPublicacionComponent},
  {path:'detalles-publicacion',component:DetallesPublicacionComponent},
  {path:'detalles-publicacion/:id',component:DetallesPublicacionComponent},
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'**',redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
