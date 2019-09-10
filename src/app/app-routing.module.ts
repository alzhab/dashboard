import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./content/content.module").then(mod => mod.ContentModule),
    data: { animation: "Content" }
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then(mod => mod.AuthModule),
    data: { animation: "Auth" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
