import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor( private aRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe( (params: any) => {
      console.log(`Parametros del padre(usuario): ` + params.id);
    });
  }

}
