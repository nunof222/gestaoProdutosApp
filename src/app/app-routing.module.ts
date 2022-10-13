import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewProductComponent } from './Components/create-new-product/create-new-product.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';


const routes: Routes = [
{path:'dashboard', component: DashboardComponent},
{path:'create-product', component: CreateNewProductComponent},
{path:'', redirectTo:'/dashboard', pathMatch:'full'},           //set default page to Dashboard
{path:'**', component: PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
