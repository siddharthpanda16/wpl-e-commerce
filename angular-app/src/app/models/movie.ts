export class Movie{
    Title:string = "Toy Story";
    Poster:string = "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg";
    _id:any = { 
        $oid : "5b107bec1d2952d0da904823" 
    };
    actors:string[] = ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"];
    awards:any = {
        wins: 22.0,
        nominations: 17.0,
        text: "Nominated for 3 Oscars. Another 22 wins & 17 nominations."
    };
    countries:string[] = ["USA"];
    director:string = "John Lasseter";
    genres:string[] = ["Animation", "Adventure", "Comedy"];
    imdb:any = { 
        rating: 8.3,
        votes: 574251.0,
        id: "tt0114709",
    };
    metacritic:number = 92.0;
    plot:string = "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.";
    rated:string = "G";
    runtime:number = 81.0;
    tomato:any = {
        rating: 9.0,
        userReviews: 1104709.0,
        userMeter: 92.0,
        image: "certified",
        meter: 100.0,
        reviews: 78.0,
        userRating: 3.7,
        fresh: 78.0,
        consensus: "Entertaining as it is innovative, Toy Story reinvigorated animation while heralding the arrival of Pixar as a family-friendly force to be reckoned with."
    };
    type:string = "movie";
    writers: string[] = [
        "John Lasseter",
        "Pete Docter",
        "Andrew Stanton",
        "Joe Ranft",
        "Joss Whedon",
        "Andrew Stanton",
        "Joel Cohen",
        "Alec Sokolow",
    ];
    year:number = 1995;
    level:number = 2;
}