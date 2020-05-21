import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { TopbarComponent } from './topbar/topbar.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes } from '@angular/router'
import { FoodComponent } from './food/food.component';
import { EducationComponent } from './education/education.component';
import { HealthComponent } from './health/health.component';
import { SocietyComponent } from './society/society.component';
import { HomeComponent } from './home/home.component'

const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'food',
    component:FoodComponent
  },
  {
    path:'health',
    component:HealthComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'society',
    component:SocietyComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LayoutComponent,
    FooterComponent,
    FoodComponent,
    EducationComponent,
    HealthComponent,
    SocietyComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
