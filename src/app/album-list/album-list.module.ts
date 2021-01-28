import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AlbumDetailPage } from "./album-detail/album-detail.page";
import { AlbumListPageRoutingModule } from "./album-list-routing.module";
import { AlbumListPage } from "./album-list.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AlbumListPageRoutingModule],
  declarations: [AlbumListPage, AlbumDetailPage],
})
export class AlbumListPageModule {}
