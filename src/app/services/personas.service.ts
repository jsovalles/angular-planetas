import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../common/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //private url = "http://localhost:8080/personas";
  private url = "https://spring-boot-planets.herokuapp.com/personas";

  constructor(private httpClient: HttpClient) { }

  listPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url)
  };

  getPersona(id):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.url}/${id}`)
  };
}
