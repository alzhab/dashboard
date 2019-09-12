import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    children: [
      {
        path: "",
        redirectTo: "chat",
        pathMatch: "full"
      },
      {
        path: "chat",
        loadChildren: () =>
          import("./chat/chat.module").then(mod => mod.ChatModule),
        data: { animation: "Chat" }
      },
      {
        path: "projects",
        loadChildren: () =>
          import("./projects/projects.module").then(mod => mod.ProjectsModule),
        data: { animation: "Projects" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {}
