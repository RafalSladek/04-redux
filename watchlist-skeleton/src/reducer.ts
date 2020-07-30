import { AnyAction } from 'redux'
import cuid from 'cuid'

export interface Movie {
    name: string;
    watched: boolean;
    id: string
}

export interface State {
    movies: Movie[]
}

const initialState = { movies: [] }

// action creator
export const addMovie = (name: string, id?: string): AnyAction => ({
    type: "ADD_MOVIE",
    name: name,
    id: id || cuid()
});

export const toggleMovie = (index: number): AnyAction => ({
    type: "TOGGLE_MOVIE",
    index: index
})

export const deleteMovie = (id: string): AnyAction => ({
    type: "DELETE_MOVIE",
    id: id
})

export const reducer = (state: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case "ADD_MOVIE": return {
            movies: [...state.movies, { name: action.name, watched: false, id: action.id }]
        }
        case "TOGGLE_MOVIE": {
            state.movies[action.index].watched = !state.movies[action.index].watched;
            return { movies: [...state.movies] }
        }
        case "DELETE_MOVIE": {
            return { movies: state.movies.filter(movie => movie.id !== action.id) }
        }
    }
    return state;
}