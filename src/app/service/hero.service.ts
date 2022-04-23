import { MessageService } from './message.service';
import { HEROES } from './../mock/mock-heroes';
import { Hero } from './../obj/Hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private message: MessageService 
  ) { }

  //需使用非同步
  getHeroes() : Observable<Hero[]> {
    const heros = of(HEROES);
    this.message.add("HeroService : fetched heroes");
    return heros;
  }
}
