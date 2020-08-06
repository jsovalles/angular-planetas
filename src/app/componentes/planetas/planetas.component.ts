import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/common/planeta';
import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: Planeta[];
  ans: String[] = [];

  constructor(private planetaService: PlanetasService) { }

  ngOnInit(): void {
    this.listPlanetas();
  }

  listPlanetas() {
    this.planetaService.listPlanetas().subscribe(
      data => {
        this.planetas = data;

        let arr : number[] = [];
        data.forEach(planeta => {
          arr.push(planeta.numeroVisitas);
        });
        arr.sort((n1,n2) => n1 - n2);
        let slice = arr.slice(arr.length-3, arr.length);
        data.forEach(planeta => {
          for (let i = 0; i < slice.length; i++) {
            if (slice[i] == planeta.numeroVisitas) {
              this.ans.push(planeta.foto);
            }
          }
        });
        this.ans = [...new Set(this.ans)];
      }
    )
  }




}
