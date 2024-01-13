import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />)

  expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument()
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />)

  const gamingCheck = screen.getByRole("checkbox", { name: /gaming/i })
  const booksCheck = screen.getByRole("checkbox", { name: /books/i })
  const foodCheck = screen.getByRole("checkbox", { name: /food/i })

  expect(gamingCheck).toBeInTheDocument();
  expect(booksCheck).toBeInTheDocument();
  expect(foodCheck).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />)

  const gamingCheck = screen.getByRole("checkbox", { name: /gaming/i })
  const booksCheck = screen.getByRole("checkbox", { name: /books/i })
  const foodCheck = screen.getByRole("checkbox", { name: /food/i })

  expect(gamingCheck).not.toBeChecked();
  expect(booksCheck).not.toBeChecked();
  expect(foodCheck).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />)

  const emailText = screen.getByLabelText(/email address/i)
  const nameText = screen.getByLabelText(/your name/i)

  userEvent.type(emailText, "example@email.com")
  userEvent.type(nameText, "john smith")

  expect(emailText).toHaveValue("example@email.com")
  expect(nameText).toHaveValue("john smith")
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App />)

  const gamingCheck = screen.getByRole("checkbox", { name: /gaming/i })
  const booksCheck = screen.getByRole("checkbox", { name: /books/i })
  const foodCheck = screen.getByRole("checkbox", { name: /food/i })

  userEvent.click(gamingCheck)
  expect(gamingCheck).toBeChecked();
  userEvent.click(booksCheck)
  expect(booksCheck).toBeChecked();
  userEvent.click(foodCheck)
  expect(foodCheck).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />)

  userEvent.click(screen.getByRole("button", { name: /Subscribe to Newsletter/i }))

  expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument();
});
