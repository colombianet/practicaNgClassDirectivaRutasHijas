import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styles: [
  ]
})
export class UsuarioEditarComponent implements OnInit {

  constructor( private aRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.aRoute.parent?.params.subscribe( (params) => {
      // para obtener los parametros del padre en el hijo, solo es de anteponer o usar la propiedad .parent
      console.log(`Parametros del padre(usuario), en ruta hija usuario-editar: ${params.id}`);
    });
  }

}
