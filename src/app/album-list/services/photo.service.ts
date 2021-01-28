import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Photo } from "src/app/shared/models/photo";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  private baseEndpoint = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) {}

  // TODO: Refactor here to turn this method able to receive a object
  // that will contain key-value pairs.
  fetchAll(filter?: any): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseEndpoint}?albumId=${filter}`);
  }
}
