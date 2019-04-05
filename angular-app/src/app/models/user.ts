
export class Card{
    ccNum:number = 1111222233334444;
    ccCVV:number = 123;
    ccExp: string="";
}

export class User{
    id:string = "";
    displayName:string = '';
    username:string = '';
    password:string = '';
    level:number = 2;
    cart:string[] = ["movieid1", "movieid2"];
    billing:Card = new Card();
    
}