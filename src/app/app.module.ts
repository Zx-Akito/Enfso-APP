import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconSvgModule } from './components/icon-svg/icon-svg.module';
import { LayoutsModule } from './layouts/layouts.module';
import { BidsComponent } from './pages/bids/bids.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { SavedComponent } from './pages/saved/saved.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { WalletComponent } from './pages/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    BidsComponent,
    SavedComponent,
    CreatorsComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    IconSvgModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
