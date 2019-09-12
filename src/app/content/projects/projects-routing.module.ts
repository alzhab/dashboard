import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects.component";

import { AllProjectsComponent } from "./all-projects/all-projects.component";
import { WorkflowComponent } from "./workflow/workflow.component";

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent,
    children: [
      {
        path: "",
        redirectTo: "all-projects"
      },
      {
        path: "all-projects",
        component: AllProjectsComponent
      },
      {
        path: "workflow",
        component: WorkflowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
