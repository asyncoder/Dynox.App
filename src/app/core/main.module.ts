import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from "@angular/material";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [FormComponent],
  providers: []
})
export class MainModule {}