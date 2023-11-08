const arrayFilms = [
    {
        title: "Il padrino",
        year: 1972,
        genre: "drama",
        rating: 9.2,
        type: "movie",
      },
      {
        title: "Il Signore degli Anelli: La compagnia dell'anello",
        year: 2001,
        genre: "fantasy",
        rating: 9.0,
        type: "movie",
      },
      {
        title: "Breaking Bad",
        year: 2008,
        genre: "crime",
        rating: 9.5,
        type: "tv",
        seasons: 5,
      },
]

//Creare una classe Movie che contenga le informazioni sopra indicate.
class Movie {
    constructor(title, year, genre, rating, type){
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }
}

