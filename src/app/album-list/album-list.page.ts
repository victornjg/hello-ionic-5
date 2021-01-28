import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Album } from "../shared/models/album";
import { AlbumService } from "./services/album.service";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.page.html",
  styleUrls: ["./album-list.page.scss"],
})
export class AlbumListPage implements OnInit {
  headerTitle = "";
  albums$: Observable<Album[]>;

  private userId = 2;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.headerTitle = data.headerTitle;
    });

    this.albums$ = this.albumService.fetchAll(this.userId);
  }

  openAlbum(albumId: number): void {
    const item = { a: 1 };
    this.router.navigate(["albums", albumId, "photos", item]);
  }
}
