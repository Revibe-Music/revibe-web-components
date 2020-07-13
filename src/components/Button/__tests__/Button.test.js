import { render, getByText, fireEvent } from "@testing-library/react"
import React from "react"
import Button from "components/Button"

describe("Button", () => {
  test("Displays Text.", () => {
    const { container } = render(<Button>We Salute You!</Button>)

    getByText(container, "We Salute You!")
  });

  test("Runs Function",  () => {
    const testFunc = jest.fn()

    const { container } = render(<Button onClick={testFunc}>Press This</Button>)

    const component = container.firstChild

    fireEvent.click(component)

    expect(testFunc).toBeCalled()
  })
});