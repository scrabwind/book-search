import { describe, it, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { Card } from "./Card"
import img from "@/assets/no-cover.jpg"

describe("Card", () => {
  const defaultTitle = "Default Title"
  it("Shows correct title", () => {
    render(<Card title={defaultTitle} />)

    const card = screen.getByTestId("card")

    expect(card).toHaveTextContent(defaultTitle)
  })

  it("Shows authors", () => {
    const authors = ["Felipe", "Kamil"]
    render(
      <Card
        title={defaultTitle}
        authors={authors}
      />
    )

    const card = screen.getByTestId("card")

    expect(card).toHaveTextContent(authors.join(", "))
  })

  it("Shows author placeholder", () => {
    render(<Card title={defaultTitle} />)
    const card = screen.getByTestId("card")

    expect(card).toHaveTextContent("No author provided")
  })

  it("Shows thumbnail src", () => {
    const src = "./image.jpg"
    render(
      <Card
        title={defaultTitle}
        imageLinks={{ thumbnail: src }}
      />
    )
    const card = screen.getByTestId("book-cover")

    expect(card.getAttribute("src")).toEqual(src)
  })

  it("Shows placeholder src", () => {
    render(<Card title={defaultTitle} />)

    const card = screen.getByTestId("book-cover")

    expect(card.getAttribute("src")).toEqual(img)
  })
})
