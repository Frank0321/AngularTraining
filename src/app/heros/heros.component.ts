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
  

  constructor() { }

  ngOnInit(): void {
  }

}
