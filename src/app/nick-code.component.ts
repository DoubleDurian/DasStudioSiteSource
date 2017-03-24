import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'nick-code',
    template:`
    <div class ="col-md-1"></div>
    <div class=" col-md-7 main">
    <h1><a [href]="post.codes[id].link">{{post.codes[id].title}}</a></h1>
    <p>{{post.codes[id].date}}</p>

    <div *ngFor="let paragraph of post.codes[id].paragraphs" >
    <p>{{paragraph}}</p>
    </div>

    <ul class="nav nav-tabs">
        <li role="presentation" *ngFor="let card of post.codes[id].cards; let i = index" [class.active]="this.imActive(i)" (click)="toggle(i)"  >
            <a>
                {{card.name}}
                
            </a>
        </li>
    </ul>


    <div *ngFor="let card of post.codes[id].cards; let i = index">
        <div *ngIf="imActive(i)">
            <h2 >{{card.name}}</h2>
            <p >{{card.info}}</p>
            <gist [gistId]="card.content"></gist>
        </div>    
    </div>
    

    </div>
    

    
    `

})

export class NickCodeComponent{
    id:string;
    active:number =0;
    
    

    
    
    post=require('NicksPosts/codes.json');

    constructor(private route: ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        
       
        
        
    }
    toggle(int:number){
        this.active = int;

    }
    imActive(int:number){
        return int == this.active;
    }
}