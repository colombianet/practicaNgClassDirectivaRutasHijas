import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes principales
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { NavbarComponent } from './shared/navbar/navbar.component';

// Rutas hijas de usuario
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar.component';

// Directiva
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    NavbarComponent,
    HoverDirective,
    UsuarioNuevoComponent,
    UsuarioDetalleComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
