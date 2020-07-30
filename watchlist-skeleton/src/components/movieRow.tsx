import * as React from 'react';

export interface Movie {
    id: number,
    name: string,
    watched: boolean,
    onChange: (index: number) => void
}
const MovieRow = (props: Movie): JSX.Element => (
    <li className="ui-state-default">
        <div className="checkbox">
            <label>
                <input
                    type="checkbox"
                    checked={props.watched}
                    onChange={() => props.onChange(props.id)}
                />
                {props.name}
            </label>
        </div>
    </li>
);

export default MovieRow;