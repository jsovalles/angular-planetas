import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/common/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {
  
  persona: Persona = new Persona();

  constructor(private personaService: PersonasService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.personaService.getPersona(id).subscribe(
          data => this.persona = data
        )
      }
    })
  }

}
