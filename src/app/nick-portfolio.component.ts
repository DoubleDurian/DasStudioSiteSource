import {Component} from '@angular/core';
@Component({
  selector: 'nick-portfolio',
  template: `
  
  <div class=" col-md-6 main">
  <div class="media" *ngFor="let post of meta.posts">
  
  <div style="padding:10px; border-style: groove; border-radius: 5px;background-color: #EEEEEE;">
  
  <div class="media-left">
    <a routerLink="/Nick/{{post.type}}/{{post.id}}">
      <img class="media-object" [src]="post.img" alt="http://rs772.pbsrc.com/albums/yy10/gamerman14/scotmeetsweegee.jpg~c200" style="width:100px;height:100px">
    </a>
  </div>

  <div class="media-body">
    <h2 class="media-heading">{{post.title}}</h2>
    {{post.brief}}
    
  </div>
  
  </div>
  
  </div>
  </div>
  <div class=" col-md-3">
  </div>
  
  `,
 
})
export class NickPortfolioComponent{

 
  meta=require('NicksPosts/meta.json');
  constructor(){ 
  }  
}