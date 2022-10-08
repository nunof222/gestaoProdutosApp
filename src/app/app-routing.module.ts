import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewProductComponent } from './Components/create-new-product/create-new-product.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
{path:'dashboard', component: DashboardComponent},
{path:'newproduct', component: CreateNewProductComponent},
{path:'', redirectTo:'/dashboard', pathMatch:'full'}             //set default page to Dashboard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
