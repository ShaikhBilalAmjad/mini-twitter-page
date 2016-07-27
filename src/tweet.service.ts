export class TweetService{
    getTweet(){
        return [
            {
                imageURL:'http://lorempixel.com/100/100/people?1',
                author:'Bilal Amjad',
                handle:'Amjad Saeed',
                body:'this is very tough app for me',
                totalLikes:0,
                iLike:false
            },
            {
                imageURL:'http://lorempixel.com/100/100/people?2',
                author:'Adeel Amjad',
                handle:'Haseeb Amjad',
                body:'but i can do this',
                totalLikes:5,
                iLike:true
            },
            {
                imageURL:'http://lorempixel.com/100/100/people?3',
                author:'Zohaib Muneeb',
                handle:'Muneeb Amjad',
                body:'this is going hard',
                totalLikes:3,
                iLike:false
            }
        ];
    }
}