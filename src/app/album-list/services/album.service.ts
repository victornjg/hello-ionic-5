import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "../../shared/models/album";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  // TODO: Extract back end base endpoint to an environment constants file.
  private baseEndpoint = "https://jsonplaceholder.typicode.com/albums";
  private fetchByIdEndpoint =
    "https://jsonplaceholder.typicode.com/albums/{id}";

  constructor(private http: HttpClient) {}

  // TODO: Refactor here to turn this method able to receive a object
  // that will contain key-value pairs.
  fetchAll(filter?: any): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseEndpoint}?userId=${filter}`);
  }

  fetchById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseEndpoint}/${id}`);
  }
}
