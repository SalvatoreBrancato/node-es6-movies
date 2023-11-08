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
        type: "series",
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
    
    //Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film.
    toString(){
        return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha avuto un voto di ${this.year}`
    }
}

//Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
class TvSerie extends Movie{
    constructor(season){
        super(title, year, genre, rating, type);
        this.season = season;
    }
//Breaking Bad è una serie tv di genere Drama. La prima stagione è stata rilasciato nel 2008 ed in totale sono state prodotte 5 stagioni. Ha un voto di 9.5
    toString(){
        return `${this.title} è un ${this.type}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.season} stagioni. Ha un voto di ${this.rating}`
    }
}


//prova classi
const film = new Movie('titolo', 2020, 'genere', 9.5, 'tipo');
console.log(film.toString())