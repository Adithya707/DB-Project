import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';






import { HomeModule } from './home/home.module';


import {NotfoundModule} from './notfound/notfound.module';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';


import { RoutegaurdService } from './routegaurd.service';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import {AboutModule} from './about/about.module'
import {ServicesModule} from './services/services.module'
import {GalleryModule} from './gallery/gallery.module'
import { ClientsModule } from './clients/clients.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { PricingModule } from './pricing/pricing.module';
import { BlogModule } from './blog/blog.module';
import { Blog1Module } from './blog1/blog1.module'

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
   {path:'Home',loadChildren:()=>HomeModule},
   {path:'About',loadChildren:()=>AboutModule},
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'contactus',component:ContactusComponent ,outlet:"popup"},
   {path:'Gallery',loadChildren:()=>GalleryModule},
   {path:'services',loadChildren:()=>ServicesModule},
   {path:'Testimonials',loadChildren:()=>TestimonialModule},
   {path:'Clients',loadChildren:()=>ClientsModule},
   {path:'Pricing',loadChildren:()=>PricingModule},
   {path:'subscribe',component:SubscribeComponent,outlet:"popup"},
   {path:'dashboard',loadChildren:() => UserDashboardModule,canActivate:[RoutegaurdService]},
   { path: 'Blog1', loadChildren: () => Blog1Module, canActivate: [RoutegaurdService] },
   { path: 'Blog', loadChildren: () => BlogModule, canActivate: [RoutegaurdService] },
   {path:'404',loadChildren:()=>NotfoundModule},
   {path:'**',redirectTo:'/404'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
