import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GridListComponent } from "./grid-list/grid-list.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  {
    path: "grid-list",
    component: GridListComponent
  },
  {
    path: "stepper",
    component: StepperComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "expansion-panel",
    component: ExpansionPanelComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  { path: "", redirectTo: "/grid-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
