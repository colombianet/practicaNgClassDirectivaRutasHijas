import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

// Rutas hijas
import { USUARIOS_ROUTES } from './usuario/usuario.routes';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    // Ruta padre con subrutas hijas (para entrar al padre es necesario el /id)
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIOS_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
