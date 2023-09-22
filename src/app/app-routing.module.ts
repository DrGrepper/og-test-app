import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OgImagesComponent } from './og-images/og-images.component';
import { ResourcesComponent } from './resources/resources.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'og-images', component: OgImagesComponent},
  {path: 'resources', component: ResourcesComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
