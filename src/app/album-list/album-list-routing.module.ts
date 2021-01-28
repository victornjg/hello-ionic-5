import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumDetailPage } from "./album-detail/album-detail.page";
import { AlbumListPage } from "./album-list.page";

const routes: Routes = [
  {
    path: "",
    component: AlbumListPage,
    data: {
      // TODO: Extract message to i18nkey file.
      headerTitle: "My Albums",
    },
  },
  {
    path: ":albumId/photos",
    component: AlbumDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumListPageRoutingModule {}
