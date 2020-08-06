import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/common/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas : Persona[];
  ans: String[] = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.listPersonas();
  }

  listPersonas(){
    this.personasService.listPersonas().subscribe(data => {
      this.personas = data;

      let arr : number[] = [];
      data.forEach(persona => {
        arr.push(persona.numeroVisitas);
      });
      arr.sort((n1,n2) => n1 - n2);
      let slice = arr.slice(arr.length-3, arr.length);
      data.forEach(persona => {
        for (let i = 0; i < slice.length; i++) {
          if (slice[i] == persona.numeroVisitas) {
            this.ans.push(persona.nombre);
          }
        }
      });
    })
  }

}
