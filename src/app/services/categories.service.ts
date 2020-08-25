import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  apiBaseUrl;

  private extractData(): string {
    const body = 'res';
    return body;
  }


  // Getting filter thing
  Fillter(filter: { price: any; size: any; brands: any; color: any; rating: any; }): Observable<any> {
    return this.http
      .get(`${this.apiBaseUrl}/filter/${filter.size}/${filter.price}/${filter.brands}/${filter.color}/${filter.rating}`)
      .pipe(map(this.extractData));
  }




  // Getting title items from server
  public getTitleProducts(titleName: string, forName: string, catName: string): Observable<any> {
    return this.http
      .get(`${this.apiBaseUrl}cat/${titleName}/${forName}/${catName}`)
      .pipe(map(this.extractData));
  }
}
