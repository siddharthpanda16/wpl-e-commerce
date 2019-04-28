export class Movie{
    Title:string = "";
    Poster:string = "";
    _id:any = { 
        $oid : "" 
    };
    actors:string[] = [];
    awards:any = {
        wins: 0,
        nominations: 0,
        text: ""
    };
    countries:string[] = [];
    director:string = "";
    genres:string[] = [];
    imdb:any = { 
        rating: 0,
        votes: 0,
        id: "",
    };
    metacritic:number = 0;
    plot:string = "";
    rated:string = "";
    runtime:number = 0;
    tomato:any = {
        rating: 0,
        userReviews: 0,
        userMeter: 0,
        image: "",
        meter: 0,
        reviews: 0,
        userRating: 7,
        fresh: 0,
        consensus: ""
    };
    type:string = "movie";
    writers: string[] = [];
    year:number = 0;
    level:number = 0;
}