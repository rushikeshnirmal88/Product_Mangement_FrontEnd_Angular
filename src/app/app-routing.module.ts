import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'viewproduct',
    component:ViewproductComponent,
    pathMatch:'full'
   
  },
  {
    path:'viewproduct/:id',
    component:ViewproductComponent,
    pathMatch:'full'
   
  },
  {
    path:'productlist',
    component:ProductlistComponent,
    pathMatch:'full'
   
  },
  {
    path:'addproduct',
    component:AddproductComponent,
    pathMatch:'full'
   
  },
  {
    path:'editproduct',
    component:EditproductComponent,
    pathMatch:'full'
   
  },
  {
    path:'editproduct/:id',
    component:EditproductComponent,
    pathMatch:'full'
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
