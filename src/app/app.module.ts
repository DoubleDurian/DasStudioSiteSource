import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule ,JsonpModule } from '@angular/http';

import {Gist} from './gist.component';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import {HomeComponent} from './home.component';

import {NickComponent} from './nick.component';
import {NickOverviewComponent} from './nick-overview.component';
import {NickPortfolioComponent} from './nick-portfolio.component';
import {NickSocialmediaComponent} from './nick-socialmedia.component';
import {NickBioComponent} from './nick-bio.component';
import {NickPostComponent} from './nick-post.component';
import {NickCodeComponent} from './nick-code.component';


import {HaseebComponent} from './haseeb.component';
import {HaseebOverviewComponent} from './haseeb-overview.component';
import {HaseebBioComponent} from './haseeb-bio.component';
import {HaseebPortfolioComponent} from './haseeb-portfolio.component';
import {HaseebSocialmediaComponent} from './haseeb-socialmedia.component';
import {HaseebPostComponent} from './haseeb-post.component';
import {HaseebCodeComponent} from './haseeb-code.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NickComponent,
    HaseebComponent, 
    NickOverviewComponent,
    NickPortfolioComponent,
    NickSocialmediaComponent,
    NickBioComponent,
    NickPostComponent,
    HaseebOverviewComponent,
    HaseebBioComponent,
    HaseebPortfolioComponent,
    HaseebSocialmediaComponent,
    HaseebPostComponent,
    HaseebCodeComponent,

    NickCodeComponent,
    Gist
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    ,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
