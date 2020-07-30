import * as React from 'react';
import { State, Movie, deleteMovie } from "src/reducer";
import { connect } from "react-redux";
import { AnyAction } from "redux";


interface WatchedMoviesStateProps {
    watchedMovies: Movie[]
}

interface WatchedMovieStateProps {
    name: string;
    id: string;
    onClick: (id: string) => void;
}

interface WatchedMoviesDispatchProps {
    deleteMovie: (id: string) => AnyAction;
}

type WatchedMoviesProps = WatchedMoviesDispatchProps & WatchedMoviesStateProps

const WatchedMovie = (props: WatchedMovieStateProps): JSX.Element => (
    <li>{props.name}<button className="remove-item btn btn-default btn-xs pull-right">
        <i onClick={() => props.onClick(props.id)} className="fas fa-times" /></button></li>
);

const WatchedMovies = (props: WatchedMoviesProps): JSX.Element => (
    <div className="col-md-6">
        <div className="todolist">
            <h1>Already Watched</h1>
            <ul id="done-items" className="list-unstyled">
                {
                    props.watchedMovies.map((movie, index) => (
                        <WatchedMovie id={movie.id} key={index} name={movie.name} onClick={props.deleteMovie} />
                    ))
                }

            </ul>
        </div>
    </div>
);

const mapStateToProps = (state: State): WatchedMoviesStateProps => ({
    watchedMovies: state.movies.filter(movie => movie.watched)
})

const mapDispatchProps = {
    deleteMovie: deleteMovie
}

export default connect(mapStateToProps, mapDispatchProps)(WatchedMovies);