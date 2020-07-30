import * as React from 'react';
import { State } from "src/reducer";
import { connect } from "react-redux";

const Counter = (props: CounterProps): JSX.Element => (
    <div data-testid="counter" className="todo-footer">
        <strong><span  className="count-todos" />{props.count}</strong> movies left
    </div>
);

export interface CounterProps {
    count: number
}

const mapStateToProps = (state: State): CounterProps => ({
    count: state.movies.filter(movie => !movie.watched).length
})

export default connect(mapStateToProps)(Counter);