import * as React from "react";
import { connect } from "react-redux";
import { addMovie } from "src/reducer";

interface AddMovieProps {
    addMovie: (title: string) => void
}

const AddMovie = (props: AddMovieProps): JSX.Element => (
    <>
        <input id="title-input" type="text" className="form-control add-todo" placeholder="Lord of the Rings, Terminator, etc." />
        <button
            id="checkAll"
            className="btn btn-success"
            onClick={() => {
                const title = (document.getElementById("title-input") as HTMLInputElement).value;
                if (title) {
                    props.addMovie(title);
                    (document.getElementById("title-input") as HTMLInputElement).value = "";
                }
            }}
        >
            Add Movie
            </button>
    </>
);
const mapToDispach = {
    addMovie: addMovie
}

export default connect(null, mapToDispach)(AddMovie);
