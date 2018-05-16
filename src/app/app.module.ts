import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GeneralComponent} from './home/general/general.component';
import {ApplicationComponent} from './home/application/application.component';

const routerApp: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: GeneralComponent},
      {path: 'application', component: ApplicationComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
