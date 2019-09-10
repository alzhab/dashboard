import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    children: [
      {
        path: "chat",
        loadChildren: () =>
          import("./chat/chat.module").then(mod => mod.ChatModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {}
