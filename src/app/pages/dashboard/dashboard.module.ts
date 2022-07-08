import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TrendingComponent } from './trending/trending.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
