import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Album } from "src/app/shared/models/album";
import { Photo } from "src/app/shared/models/photo";
import { AlbumService } from "../services/album.service";
import { PhotoService } from "../services/photo.service";

@Component({
  selector: "app-album-detail",
  templateUrl: "./album-detail.page.html",
  styleUrls: ["./album-detail.page.scss"],
})
export class AlbumDetailPage implements OnInit {
  photos$: Observable<Photo[]>;

  private albumId: number;
  private album$: Observable<Album>;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    // TODO: Implement canActivate guard to validate the albumId received.
    this.route.params.subscribe((params) => {
      console.log("AlbumDetailPage - params ->", params);
      this.albumId = parseInt(params.albumId, 10);
    });

    this.route.data.subscribe((data) => {
      console.log("AlbumDetailPage - data ->", data);
    });

    this.album$ = this.albumService.fetchById(this.albumId);
    this.photos$ = this.photoService.fetchAll(this.albumId);
  }
}
