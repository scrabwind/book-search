import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Alert, type AlertProps } from "./Alert"

describe("Alert", () => {
  const defaultProps: AlertProps = {
    description: "Default Description",
    title: "Default Title",
    variant: "default"
  }
  it("Displays title and description", () => {
    render(<Alert {...defaultProps} />)

    const element = screen.getByRole("alert")

    expect(element).toHaveTextContent(defaultProps.title)
  })

  it("Displays default variant", () => {
    render(<Alert {...defaultProps} />)

    const icon = screen.getByTestId("info-icon")

    expect(icon).toBeVisible()
  })

  it("Displays error variant", () => {
    render(
      <Alert
        {...defaultProps}
        variant="destructive"
      />
    )

    const icon = screen.getByTestId("error-icon")

    expect(icon).toBeVisible()
  })
})
