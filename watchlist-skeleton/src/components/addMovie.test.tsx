import React from 'react'
import { createStore } from "redux"
import { reducer } from "src/reducer"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import AddMovie from "./addMovie"

describe("Add movie", () => {
    it("should add a movie to the state", () => {
        const store = createStore(reducer);

        const { getByRole } = render(
            <Provider store={store}>
                <AddMovie />
            </Provider>
        )

        fireEvent.change(getByRole('textbox'), { target: { value: "Rambo" } });
        fireEvent.click(getByRole('button'));

        expect(store.getState().movies[0].name).toBe("Rambo");
    })
})