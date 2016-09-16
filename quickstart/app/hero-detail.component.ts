// Keep the Input import for now, we'll remove it later:
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from "./hero";


@Component({
	selector: 'hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ["app/hero-detail.component.css"]
})

export class HeroDetailComponent implements OnInit {

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute) {
	}

	ngOnInit(): void {
	  console.log(this.route.params);
	  this.route.params.forEach((param: Params) => {
	     let id = +param['id'];
	     this.heroService.getHero(id).then(hero => this.hero = hero);
	  });
	}

	goBack(): void{
		window.history.back();
	}
}