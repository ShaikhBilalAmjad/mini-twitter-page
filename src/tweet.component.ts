import {Component} from 'angular2/core';
import {MediaComponent} from './media.component';
import {TweetService} from './tweet.service';

@Component({
    selector:'tweet',
    template:`
        <div *ngFor="let tweets of tweet">
                <person [data]="tweets"></person>
        </div> 
    `,
    directives:[MediaComponent],
    providers:[ TweetService]
})

export class TweetComponent{
    tweet : any[];
    constructor(tweetservice: TweetService ){
        this.tweet = tweetservice.getTweet();
    }
}