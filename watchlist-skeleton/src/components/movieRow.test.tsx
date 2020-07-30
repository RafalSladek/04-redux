import * as React from 'react'
import { render } from "@testing-library/react"
import MovieRow from "./movieRow"

describe("Movie row", () => {
    it("should contain movies", () => {
        const { container } = render(
            <MovieRow id={1} name={"Rambo"} watched={false} onChange={() => ({ type: {} })} />
        )
        expect(container.textContent).toBe("Rambo");
        //expect(getByRole('checkbox', { checked: true })).toBeTruthy();
    })
})