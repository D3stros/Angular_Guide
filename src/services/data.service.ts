import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http
      .patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http.delete(this.url + "/" + id).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
