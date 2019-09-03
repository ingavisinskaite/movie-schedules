interface MovieDay {
    date: Date;
    movies: Array<Movie>;
}

interface Movie {
    title: string;
    ltTitle: string;
    imgSrc: string;
    cinemaSchedules: Array<CinemaMovieSchedule>;
}

interface CinemaMovieSchedule {
    title: string;
    times: Array<Date>;
}

export { MovieDay, Movie, CinemaMovieSchedule };