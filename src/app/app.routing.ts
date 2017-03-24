import {Router,RouterModule} from '@angular/router';

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

export const routing = RouterModule.forRoot([
    { path: '',component: HomeComponent},
    { path: 'Nick',component:  NickComponent,
        children:[
             { path: '', redirectTo: 'overview', pathMatch: 'full' },
             { path: 'overview', component: NickOverviewComponent },
             { path: 'portfolio', component: NickPortfolioComponent},
             { path: 'connect', component: NickSocialmediaComponent },
             { path: 'bio', component: NickBioComponent },
             { path: 'post/:id', component: NickPostComponent },
             { path: 'code/:id', component: NickCodeComponent}
            
            
        ]},
    { path: 'Haseeb',component: HaseebComponent,
        children:[
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: HaseebOverviewComponent },
            { path: 'portfolio', component: HaseebPortfolioComponent },
            { path: 'connect', component: HaseebSocialmediaComponent },
            { path: 'bio', component: HaseebBioComponent },
            { path: 'post/:id', component: HaseebPostComponent },
            { path: 'code/:id', component: HaseebCodeComponent}


        ]},
    { path: '**',component: HomeComponent},


])