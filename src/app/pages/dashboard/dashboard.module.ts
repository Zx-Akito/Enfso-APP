import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TrendingComponent } from './trending/trending.component';
import { ContentsideComponent } from './contentside/contentside.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TrendingComponent,
    ContentsideComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
