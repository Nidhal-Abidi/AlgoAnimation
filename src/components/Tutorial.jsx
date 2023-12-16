import { useState } from "react"

export function Tutorial() {
  const [isTutOpen, setIsTutOpen] = useState(true)
  const [currentPageIdx, setCurrentPageIdx] = useState(1)
  const tutorialPages = [
    {
      title: "Welcome to Sorting Orchestra!",
      subTitle:
        "This short tutorial will walk you through all of the features of this application.",
      body: {
        text: "If you want to dive right in, feel free to press the 'Skip Tutorial' button below. Otherwise, press 'Next'!",
        imageURL: "https://media.giphy.com/media/NMI3ndWANUmXBkC7tQ/giphy.gif",
      },
    },
    {
      title: "What's a Sorting Algorithm?",
      subTitle:
        "At its core, a sorting algorithm seeks to transform a randomly generated array into a sorted one. This application visualizes various sorting algorithms in action and more!",
      body: {
        text: (
          <span>
            <br />
            There are many resources on the internet about sorting algorithms
            among them are{" "}
            <a href="https://en.wikipedia.org/wiki/Sorting_algorithm">
              Wikipedia
            </a>{" "}
            and <a href="https://visualgo.net/en/sorting?slide=1">visualgo</a>.{" "}
            <br /> <br />
            However one of the most intriguing demos of integer sorting is the
            visualization and {"audibilization"} by andrut, available in a{" "}
            <a href="https://www.youtube.com/watch?v=t8g-iYGHpEA">
              YouTube video
            </a>{" "}
            (oldest audio sorting algorithm). Alongside the most popular one
            that I{"'"}ve found by{" "}
            <a href="https://www.youtube.com/watch?v=kPRA0W1kECg">
              Timo Bingmann
            </a>
            <br />
            <br />
            All of these algorithms show the trail of their sorting actions
            while producing a dynamic symphony of sounds that reflect their
            activities.
            <br /> <br />I wanted to create my version of this by leveraging my
            knowledge of Front End Technologies (React, JS, CSS ...).
          </span>
        ),
        imageURL: "",
      },
    },
    {
      title: "How does this work?",
      subTitle: "",
      body: {
        text: (
          <ul>
            <li>
              <b>
                <em>Pick an Algorithm: </em>
              </b>
              You can choose to visualize one out of 3 sorting algorithms by
              clicking on the corresponding button.
            </li>
            <br />
            <li>
              <b>
                <em>Choose the sorting speed: </em>
              </b>
              Slow like a turtle or fast like a rabbit, you can visualize the
              sorting algorithm at whatever speed is comfortable to you.
            </li>
            <br />
            <li>
              <b>
                <em>Listen/Mute the sounds: </em>
              </b>
              Each algorithm emits sounds while sorting. If you don{"'"}t want
              to hear that anymore you can mute it by clicking on the speaker.
            </li>
          </ul>
        ),
        imageURL: "images/controls.png",
      },
    },
    {
      title: "Enjoy!",
      subTitle:
        "I hope you have just as much fun playing around with this visualization tool as I had fun building it!",
      body: {
        text: (
          <span>
            If you want to see the source code for this application, check out
            my{" "}
            <a href="https://github.com/Nidhal-Abidi/AlgoAnimation">Github</a>.
          </span>
        ),
        imageURL:
          "https://res.cloudinary.com/practicaldev/image/fetch/s--tOtzRLSR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/rs4o6zjoplf9xdk9ri18.gif",
      },
    },
  ]

  const closeTutorial = () => {
    setIsTutOpen(false)
  }
  const nextPage = () => {
    if (currentPageIdx < 4) {
      setCurrentPageIdx((prevIdx) => prevIdx + 1)
    } else if (currentPageIdx == 4) {
      closeTutorial()
    }
  }
  const prevPage = () => {
    if (currentPageIdx > 1) {
      setCurrentPageIdx((prevIdx) => prevIdx - 1)
    }
  }

  return (
    <div
      className={isTutOpen ? "tutorial-container" : "tutorial-container close"}
    >
      <div className="tutorial-overlay"></div>
      <div className="tutorial-content">
        <h1> {tutorialPages[currentPageIdx - 1].title} </h1>
        <div id="tutorial-counter">{currentPageIdx}/4</div>

        <h3> {tutorialPages[currentPageIdx - 1].subTitle} </h3>
        <span> {tutorialPages[currentPageIdx - 1].body.text} </span>
        {tutorialPages[currentPageIdx - 1].body.imageURL == "" ? (
          ""
        ) : (
          <img
            src={tutorialPages[currentPageIdx - 1].body.imageURL}
            alt="gif"
            className={currentPageIdx === 3 ? "img-embed" : "giphy-embed"}
          />
        )}

        <nav className="tutorial-nav">
          <button className="btn btn-accent" onClick={closeTutorial}>
            Skip Tutorial
          </button>
          <ul className="tutorial-nav-pagination">
            <li>
              <button
                className="btn"
                onClick={prevPage}
                disabled={currentPageIdx == 1}
              >
                Previous
              </button>
            </li>
            <li>
              <button className="btn" onClick={nextPage}>
                {currentPageIdx == 4 ? "Finish" : "Next"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
