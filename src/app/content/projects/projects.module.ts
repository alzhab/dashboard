import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";

import { SharedModule } from "../../shared";
import { WorkflowComponent } from "./workflow/workflow.component";
import { AllProjectsComponent } from "./all-projects/all-projects.component";

@NgModule({
  declarations: [ProjectsComponent, WorkflowComponent, AllProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule]
})
export class ProjectsModule {}
