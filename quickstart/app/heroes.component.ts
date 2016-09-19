import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
	
	selectedHero: Hero;
	heroes: Hero[];

	constructor(private heroService: HeroService, private router: Router){}

	ngOnInit(): void {
		this.heroService.getHeroes().then( heroes => this.heroes = heroes);
	}

	selectHero(hero: Hero): void{
		this.selectedHero = hero;
	}

	gotoDetail(){
		this.router.navigate(["/detail", this.selectedHero.id]);
	}

	add(name: string): void {
	  name = name.trim();

	  if (!name) { return; }

	  this.heroService.create(name)
	    .then(hero => {
	      this.heroes.unshift(hero);
	      this.selectedHero = null;
	    });
	}

	delete(hero: Hero): void{
		this.heroService
			.delete(hero.id)
			.then( () => {
				this.heroes = this.heroes.filter( h => h.id !== hero.id ) 
				if(this.selectedHero === hero) this.selectedHero = null
			});
	}


}


