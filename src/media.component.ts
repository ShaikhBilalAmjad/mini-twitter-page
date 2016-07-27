import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector:'person',
    template:`
            <div class="media" >
                <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{data.imageURL}}" alt="...">
                </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading"  >
                    {{data.author}}<span class="handle">{{data.handle}}</span>
                    </h4>
                    {{data.body}}
                    <div>
                        <ilike [ishighlight]="data.iLike" [totalLikes]="data.totalLikes"></ilike>
                    </div>
                </div>
            </div>
    `,
styles:[`
    .media{
        margin: 20px;
    }
    
    .handle{
        color:#ccc;
    }
    
    .media-object{
        border-radius: 10px;
    }
`],
directives:[LikeComponent]
})

export class MediaComponent{
        @Input() data;
}