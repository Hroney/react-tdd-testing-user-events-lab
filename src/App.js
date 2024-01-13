import { useState } from "react";

function App() {
  const [emailAddress, setEmailAddress] = useState("")
  const [nameOfSignee, setNameOfSignee] = useState("")
  const [listOfChecks, setListOfChecks] = useState({
    gaming: false,
    books: false,
    food: false
  })
  const [newsletterStatus, setNewsletterStatus] = useState(false)

  const updateEmailAddress = (e) => setEmailAddress(e.target.value)
  const updateSigneeName = (e) => setNameOfSignee(e.target.value)
  const toggleCheck = (e) => {
    const name = e.target.name
    let value = e.target.checked
    setListOfChecks({
      ...listOfChecks,
      [name]: value,
    })
  }

  const submitNewsletter = (e) => {
    e.preventDefault();
    setNewsletterStatus(true)
  }

  return (
    <main>
      <h1>Hi, I'm Hayden </h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div>
        <h1>Sign up for our Newsletter!</h1>
        <form onSubmit={submitNewsletter}>
          <div>
            <h3>Contact Info</h3>
            <label htmlFor="email">Enter email address: </label>
            <input
              type="text"
              value={emailAddress}
              id="email"
              placeholder="email address"
              onChange={updateEmailAddress}
            />
            <br />
            <label htmlFor="name">Enter your name: </label>
            <input
              type="text"
              value={nameOfSignee}
              id="name"
              placeholder="your name"
              onChange={updateSigneeName}
            />
          </div>
          <div>
            <h3>Add your interests</h3>
            <input
              type="checkbox"
              id="gaming"
              name="gaming"
              checked={listOfChecks.gaming}
              aria-checked={listOfChecks.gaming}
              onChange={toggleCheck}
            />
            <label htmlFor="gaming">Gaming</label>
            <br />
            <input
              type="checkbox"
              id="books"
              name="books"
              checked={listOfChecks.books}
              aria-checked={listOfChecks.books}
              onChange={toggleCheck}
            />
            <label htmlFor="books">Books</label>
            <br />
            <input
              type="checkbox"
              id="food"
              name="food"
              checked={listOfChecks.food}
              aria-checked={listOfChecks.food}
              onChange={toggleCheck}
            />
            <label htmlFor="food">Food</label>
          </div>
          <button type="submit">Subscribe to Newsletter</button>
        </form>
        {newsletterStatus ?
          <>
            <h2>Thanks for Subscribing!</h2>
            {(listOfChecks.gaming || listOfChecks.books || listOfChecks.food) ?
              <h4>You will be notified of:
                {listOfChecks.gaming ? ` Gaming${(listOfChecks.books || listOfChecks.food) ? "," : ""}` : null}
                {listOfChecks.books ? ` Books${(listOfChecks.food) ? "," : ""}` : null}
                {listOfChecks.food ? `${(listOfChecks.gaming || listOfChecks.books) ? " and" : ""} Food` : null}
              </h4> : null}
          </>
          : null}
      </div>
    </main>
  );
}

export default App;
