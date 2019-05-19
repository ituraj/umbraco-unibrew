import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlagsComponent } from './flags/flags.component';
import { SecondaryFormComponent } from './secondary-form/secondary-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';

const routes: Routes = [
  { path: '', component: FlagsComponent },
  { path: 'flags', component: FlagsComponent },
  { path: 'drivers-register', component: SecondaryFormComponent },
  { path: 'main-form', component: MainFormComponent },
  { path: 'print-layout', component: PrintLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
