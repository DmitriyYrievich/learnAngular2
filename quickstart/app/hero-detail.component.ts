import { Component, Input} from "@angular/core";
import { Hero } from "./hero";

@Component({
	selector: 'hero-detail',
	template: `
			      <div *ngIf="hero">
					<h2>hero detail {{hero.name}}</h2>
					<h2>{{hero.id}}</h2>

					<input type="text" [(ngModel)]="hero.name" />
				  </div>
			  `
})

export class HeroDetailComponent{
	@Input()
	hero: Hero;
}