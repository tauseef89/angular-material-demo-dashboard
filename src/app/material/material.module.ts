import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatSelectModule
} from "@angular/material";

const materialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatSelectModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {}
