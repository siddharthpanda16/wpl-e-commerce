
export class Card{
    ccNum:string = "1111222233334444";
    ccCVV:string = "123";
    ccExp: string="";
}

export class User{
    match:boolean;
    id:string = "";
    displayName:string = '';
    username:string = '';
    password:string = '';
    level:number = 2;
    cart:string[] = ["movieid1", "movieid2"];
    billing:Card = new Card();
    
}