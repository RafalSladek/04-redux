import React from 'react'
import { createStore } from "redux"
import { reducer, addMovie } from "src/reducer"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Counter from "./counter"


describe("Counter", () => {
    it("should count the movies in the app", () => {
        const store = createStore(reducer);
        store.dispatch(addMovie("Terminator"))
        store.dispatch(addMovie("Rambo"))
        const { container } = render(
            <Provider store={store}>
                <Counter />
            </Provider>
        )
        expect(container.textContent).toBe("2 movies left");
    });
});