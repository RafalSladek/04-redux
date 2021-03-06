import React from 'react'
import { createStore } from "redux"
import { reducer } from "src/reducer"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import App from "./App"

describe("Add movie", () => {
    it("should add a movie to the state", () => {
        const store = createStore(reducer);

        const { getByRole, getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        fireEvent.change(getByRole('textbox'), { target: { value: "Rambo" } });
        fireEvent.click(getByRole('button'));

        expect(getByTestId("counter").textContent).toBe("1 movies left");
        expect(store.getState().movies[0].name).toBe("Rambo");
    })
})