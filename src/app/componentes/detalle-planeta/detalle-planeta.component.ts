import { Component, OnInit } from '@angular/core';
import { Planeta } from 'src/app/common/planeta';
import { PlanetasService } from 'src/app/services/planetas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-planeta',
  templateUrl: './detalle-planeta.component.html',
  styleUrls: ['./detalle-planeta.component.css']
})
export class DetallePlanetaComponent implements OnInit {

  planeta: Planeta = new Planeta();

  constructor(private planetaService: PlanetasService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPlaneta();
  }

  cargarPlaneta(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.planetaService.getPlaneta(id).subscribe(
          data => this.planeta = data
        )
      }
    })
  }

}
