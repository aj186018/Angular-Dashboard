import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DatagridsearchComponent } from './modules/datagridsearch/datagridsearch.component';
import { ItemsComponent } from './modules/items/items.component';
import { MenubuilderComponent } from './modules/menubuilder/menubuilder.component';
import { PostsComponent } from './modules/posts/posts.component';

export const routes: Routes = [
 {
  component:PostsComponent,
  path:'announcements'
},
{
   component:DashboardComponent,
   path:'dashboard'
},
{
  component:DatagridsearchComponent,
  path:'datagridsearch'
},
{
  component:MenubuilderComponent,
  path:'menubuilder'
},
{
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
}
];
//export const angularDashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AngularDashboardRoutingModule { }

