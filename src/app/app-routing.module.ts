import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { BidsComponent } from './pages/bids/bids.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SavedComponent } from './pages/saved/saved.component';
import { WalletComponent } from './pages/wallet/wallet.component';

const routes: Routes = [
  	{ 	
		path: '', 
		component: LayoutsComponent,
		children: [
			{ path: '', redirectTo:'/dashboard', pathMatch: 'full' },
			{ path: 'dashboard', component: DashboardComponent },
			{ path:'bids', component:  BidsComponent},
			{ path:'saved', component:  SavedComponent},
			{ path:'creators', component:  CreatorsComponent},
			{ path:'wallet', component:  WalletComponent}
			
		]
	}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
