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
  
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
