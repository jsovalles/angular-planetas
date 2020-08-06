import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../common/planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {


  //private url = "http://localhost:8080/planetas";
  private url = "https://spring-boot-planets.herokuapp.com/planetas";

  constructor(private httpClient : HttpClient) { }

  listPlanetas(): Observable<Planeta[]>{
    return this.httpClient.get<Planeta[]>(this.url)
  };

  getPlaneta(id):Observable<Planeta>{
    return this.httpClient.get<Planeta>(`${this.url}/${id}`)
  };

}
