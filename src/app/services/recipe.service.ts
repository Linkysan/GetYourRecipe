import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const urlCORS = "https://cors-anywhere.herokuapp.com/";
const httpOptions = {
  headers: new HttpHeaders().set(
    'X-Requested-With',
    'For use with cors-anywhere'
  )
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  byFilter(title: string, ingredients: string, page?: number) {
    let url = urlCORS + "http://www.recipepuppy.com/api/?i={1}&q={2}&p={3}";
    url = url.replace('{1}', ingredients).replace("{2}", title).replace("{3}", page ? page.toString() : "1");

    return this.http.get(url, httpOptions);
  }

}
