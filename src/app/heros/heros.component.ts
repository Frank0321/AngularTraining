import { MessageService } from './../service/message.service';
import { HeroService } from './../service/hero.service';
import { HEROES } from './../mock/mock-heroes';
import { Hero } from './../obj/Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  // hero:string = 'hero component';

  hero: Hero = {
    id:1,
    name: 'frank',
  };
  inputHero: Hero = {
    id:0,
    name: ''
  }
  
  // heroes = HEROES;
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(
    private service : HeroService,
    private message : MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.message.add(`heroesComponent: Selected hero id = ${hero.id}`);
  }

  getHeroes(): void {
    // this.heroes = this.service.getHeroes();
    this.service.getHeroes()
    .subscribe(resHeroes => this.heroes = resHeroes);
  }

}
