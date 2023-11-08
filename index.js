const arrayFilms = [
    {
        title: "Il Padrino",
        year: 1972,
        genre: "drama",
        rating: 9.2,
        type: "movie"
      },
      {
        title: "Il Signore degli Anelli: La compagnia dell'anello",
        year: 2001,
        genre: "fantasy",
        rating: 9.0,
        type: "movie"
      },
      {
        title: "Pulp Fiction",
        year: 1994,
        genre: "crime",
        rating: 9.0,
        type: "movie"
      },
      {
        title: "Shining",
        year: 1980,
        genre: "crime",
        rating: 8.5,
        type: "movie"
      },
      {
        title: "La ricerca della felicità",
        year: 2006,
        genre: "drama",
        rating: 8.2,
        type: "movie"
      },
      {
        title: "Parasite",
        year: 2019,
        genre: "drama",
        rating: 9.1,
        type: "movie"
      },
      {
        title: "Breaking Bad",
        year: 2008,
        genre: "crime",
        rating: 9.5,
        type: "tv",
        seasons: 9
      },
      {
        title: "The Wire",
        year: 2002,
        genre: "crime",
        rating: 9.2,
        type: "tv",
        seasons: 5
      },
      {
        title: "Game of Thrones",
        year: 2011,
        genre: "fantasy",
        rating: 9.3,
        type: "tv",
        seasons: 10
      },
      {
        title: "The Sopranos",
        year: 1999,
        genre: "crime",
        rating: 9.2,
        type: "tv",
        seasons: 3
      },
      {
        title: "Mad Men",
        year: 2007,
        genre: "drama",
        rating: 9.2,
        type: "tv",
        seasons: 4
      },
    ];

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
    constructor(title, year, genre, rating, type, seasons){
        super(title, year, genre, rating, type);
        this.season = seasons;
    }

    toString(){
        return `${this.title} è una serie ${this.type}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.season} stagioni. Ha un voto di ${this.rating}`
    }
}


//Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
const filterType = arrayFilms.map(x=> {
    if(x.type === 'movie'){
        const film = new Movie(x.title, x.year, x.genre, x.rating, x.type);
        console.log(film.toString());
    } else if (x.type === 'tv'){
        const serieTV = new TvSerie(x.title, x.year, x.genre, x.rating, x.type, x.seasons);
        console.log(serieTV.toString());
    }
})

//Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. 
//Prevedere un argomento per la lista dei film ed uno per il genere.

function mediaRating(genre = 'drama'){
    let mediaFilm = 0;
    for (const elem of arrayFilms) {
        if(elem.genre === genre){
            mediaFilm+= elem.rating
        }
    }
    return `Il voto medio dei soli film di genere ${genre} è ${mediaFilm}`;
}
console.log(mediaRating('fantasy'))



