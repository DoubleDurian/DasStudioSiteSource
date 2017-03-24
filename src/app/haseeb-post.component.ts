import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'haseeb-post',
  template: `
    <div class ="col-md-1"></div>
    <div class=" col-md-7 main">
    <h1><a [href]="post.posts[id].link">{{post.posts[id].title}}</a></h1>
    <p>{{post.posts[id].date}}</p>

    <div *ngFor="let paragraph of post.posts[id].paragraphs" >
    <p>{{paragraph}}</p>
    </div>

    <ul class="nav nav-tabs">
        <li role="presentation" *ngFor="let card of post.posts[id].cards; let i = index" [class.active]="this.imActive(i)" (click)="toggle(i)"  >
            <a>
                {{card.name}}
                
            </a>
        </li>
    </ul>


    <div *ngFor="let card of post.posts[id].cards; let i = index">
        <div *ngIf="imActive(i)">
            <h2 >{{card.name}}</h2>
            
            <img [src]="card.content" style="width:100%;height: auto;">
            <div style="padding:30px;" class="well">
              <p >{{card.info}}</p>
            </div>
        </div>    
    </div>
    

    </div>
    
    


    
  `,
})
export class HaseebPostComponent  {
    id:string;
    active:number =0;
    
    post=require('HaseebPosts/posts.json');
  

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