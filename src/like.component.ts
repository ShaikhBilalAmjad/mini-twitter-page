import {Component, Input} from 'angular2/core';

@Component({
    selector:'ilike',
    template:`
    <i 
    class="glyphicon glyphicon-heart"
    [class.highlight]= "ishighlight"
    (click)="onclick()">
    </i>
    <span>{{totalLikes}}</span>
    `,
    styles:[`
        .glyphyicon-heart{
            color: #ccc;
            cursor: pointer;
        }
        .highlight{
            color: deeppink;
        }
    `]
})

export class LikeComponent{
   @Input() ishighlight= false;
   @Input() totalLikes = 0;
   onclick(){
       this.ishighlight=!this.ishighlight;
       this.totalLikes += this.ishighlight ? 1 : -1;
   } 
}