import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private aRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    // para obtener los parametros del padre en el hijo, solo es de anteponer o usar la propiedad .parent
    this.aRoute.parent?.params.subscribe( (params) => {
      console.log(`Parametros del padre(usuario), en ruta hija usuario-detalle: ${params.id}`);
    });
  }

}
