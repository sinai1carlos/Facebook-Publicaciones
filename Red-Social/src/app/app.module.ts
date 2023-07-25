import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient,HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { DetallesPublicacionComponent } from './components/detalles-publicacion/detalles-publicacion.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostServiceService } from './services/post-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearPublicacionComponent,
    DetallesPublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
