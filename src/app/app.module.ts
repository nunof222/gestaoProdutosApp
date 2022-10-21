import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewProductComponent } from './Components/create-new-product/create-new-product.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from'@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    CreateNewProductComponent,
    DashboardComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
