import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private aRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.aRoute.parent?.params.subscribe( (params) => {
      // para obtener los parametros del padre en el hijo, solo es de anteponer o usar la propiedad .parent
      console.log(`Parametros del padre(usuario), en ruta hija usuario-nuevo: ${params.id}`);
    });
  }

}
