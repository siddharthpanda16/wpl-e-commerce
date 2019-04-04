
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
    _id:string = "";
    displayName:string = '';
    username:string = '';
    password:string = '';
    plan:number = 2;
    cart:string[] = ["movieid1", "movieid2"];
    billing:Card = new Card();
    
}