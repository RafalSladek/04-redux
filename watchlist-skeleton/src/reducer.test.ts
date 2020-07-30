import { reducer, addMovie, State, toggleMovie, deleteMovie } from './reducer'


describe("Reducer", () => {
    it("should add a movie", () => {
        const initialtate: State = {
            movies: []
        }

        const finalState = reducer(initialtate, addMovie("Terminator", "1"));

        expect(finalState).toEqual({
            movies: [
                { name: "Terminator", id: "1", watched: false }
            ]
        });
    })

    it("should toggle a movie", () => {
        const initialtate: State = {
            movies: [{ name: "Terminator", id: "asda", watched: false }]
        }

        const finalState = reducer(initialtate, toggleMovie(0));

        expect(finalState).toEqual({
            movies: [
                { name: "Terminator", id: "asda", watched: true }
            ]
        });
    })


    it("should delete a movie", () => {
        const initialtate: State = {
            movies: [
                { name: "Terminator", id: "asda", watched: false },
                { name: "Rambo", id: "asdgeh3gra", watched: false },
                { name: "Iron fist", id: "sagdsf", watched: false }
            ]
        }

        const finalState = reducer(initialtate, deleteMovie("asdgeh3gra"));

        expect(finalState).toEqual({
            movies: [
                { name: "Terminator", id: "asda", watched: false },
                { name: "Iron fist", id: "sagdsf", watched: false }
            ]
        });
    })
})