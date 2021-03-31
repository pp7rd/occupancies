import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { HardwareDashboardComponent } from "./hardware-dashboard/hardware-dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HardwareDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
