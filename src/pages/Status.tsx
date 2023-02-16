import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"

import "./Status.css"

const Status = () => {
  const [newAnswer, setNewAnswer] = useState("")
  const [answer, setAnswer] = useState([
    "Concordo...",
    "Olha, faz sentido",
    "Verdadeee"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswer([newAnswer, ...answer])
    setNewAnswer("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswer([newAnswer, ...answer])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum quo architecto odit ipsum culpa ipsam adipisci, ducimus quia maiores incidunt eligendi quae iusto sunt ea eaque praesentium sint illum!" />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/Eric-Formiga.png" alt="imagem do usuario" />
          <textarea
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            id="tweet"
            placeholder="Tweet your answer"
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }} />
        </label>

        <button type="submit"> 
        <PaperPlaneRight/>
        <span>Answer</span>
        </button>
      </form>

      {answer.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  )
}

export default Status
