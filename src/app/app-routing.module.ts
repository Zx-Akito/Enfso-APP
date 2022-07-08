import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  	{ 	
		path: '', 
		component: LayoutsComponent,
		children: [
			{path:'', component: DashboardComponent
		}
		]
	}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
