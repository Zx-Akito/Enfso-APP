import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconSvgModule } from '../components/icon-svg/icon-svg.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LayoutsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconSvgModule,
    RouterModule
  ], exports: [
    LayoutsComponent
  ]
})
export class LayoutsModule { }
