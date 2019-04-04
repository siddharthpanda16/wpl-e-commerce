
export class Card{
    ccNum:number = 1111222233334444;
    ccCVV:number = 123;
    ccExp: {
        day:number;
        month:number;
        year:number;
    }
}

export class User{
    _id:string = "1234567890";
    displayName:string = 'foo';
    username:string = 'jar2';
    password:string = 'bigFish17';
    plan:number = 2;
    cart:string[] = ["movieid1", "movieid2"];
    billing:Card = new Card();
    
}