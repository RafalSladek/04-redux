import * as React from 'react';
import { State, Movie, toggleMovie } from "src/reducer";
import MovieRow from "./movieRow";
import { connect } from "react-redux";
import { AnyAction } from "redux";


interface MovieListStateProps {
    movies: Movie[]
}

interface MovieListDispatchProps {
    toggleMovie: (index: number) => AnyAction;
}

type MovieListProps = MovieListDispatchProps & MovieListStateProps



const MovieList = (props: MovieListProps): JSX.Element => (
    <ul id="sortable" className="list-unstyled">
        {
            props.movies.map((movie, index) => (
                <MovieRow
                    key={index}
                    id={index}
                    watched={movie.watched}
                    name={movie.name}
                    onChange={props.toggleMovie}
                />
            ))
        }
    </ul>
);

const mapStateToProps = (state: State): MovieListStateProps => ({
    movies: state.movies
});

const mapDispatchProps = {
    toggleMovie: toggleMovie
}
export default connect(mapStateToProps, mapDispatchProps)(MovieList);