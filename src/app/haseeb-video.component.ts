import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'haseeb-video',
    template:`
    <div class ="col-md-1"></div>
    <div class=" col-md-7 main">
    <h1><a [href]="post.videos[id].link">{{post.videos[id].title}}</a></h1>
    <p>{{post.videos[id].date}}</p>

    <div *ngFor="let paragraph of post.videos[id].paragraphs" >
    <p>{{paragraph}}</p>
    </div>

    <ul class="nav nav-tabs">
        <li role="presentation" *ngFor="let card of post.videos[id].cards; let i = index" [class.active]="this.imActive(i)" (click)="toggle(i)"  >
            <a>
                {{card.name}}
                
            </a>
        </li>
    </ul>


    <div *ngFor="let card of post.videos[id].cards; let i = index">
        <div *ngIf="imActive(i)">
            <h2 >{{card.name}}</h2>
            <p >{{card.info}}</p>
            <iframe width="560" height="315" frameborder="0" allowfullscreen [src]="card.content | safe"></iframe>
            



        </div>    
    </div>
    

    </div>
    

    
    `

})

export class HaseebVideoComponent{
    id:string;
    active:number =0;
    
    

    
    
    post=require('HaseebPosts/videos.json');

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