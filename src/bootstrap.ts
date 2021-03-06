import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {MediaComponent} from './media.component';
import {TweetService} from './tweet.service';


@Component({
  selector: 'app',
  template:`
        <div *ngFor="let tweets of tweet">
                <person [data]="tweets"></person>
        </div> 
    `,
    directives:[MediaComponent],
    providers:[ TweetService]
})
export class App{
        tweet : any[];
    constructor(tweetservice: TweetService ){
        this.tweet = tweetservice.getTweet();
    }  
}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
