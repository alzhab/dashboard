import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./core";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./content/content.module").then(mod => mod.ContentModule),
    canActivate: [AuthGuardService]
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
