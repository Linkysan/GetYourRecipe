import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { MatSnackBar } from '@angular/material';
import { ResponseAPI, Recipe } from '../Models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listRecipe: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  searchRecipe(form: any) {
    let ingredients = form.controls.ingredients.value;
    let title = form.controls.title.value;

    this.recipeService.byFilter(title, ingredients) .subscribe(
      (resp: ResponseAPI) => {
        this.listRecipe = resp.results;
      },
      error => {
        this.snackBar.open("No results have been obtained", null, {
          duration: 5000
        });
      }
  );
  }
  }
