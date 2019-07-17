import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Models/recipe.model';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent implements OnInit {

  displayedColumns: string[] = ['title'];
  @Input() listRecipe: Recipe[];

  constructor() { }

  ngOnInit() {
  }

}
