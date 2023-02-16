import './Tweet.css'
import {ChatCircle, ArrowClockwise, Heart}  from 'phosphor-react'
import { Link } from 'react-router-dom'
interface TweetProps{
content: string
}

const Tweet = (props:TweetProps) => {
  return (
    <Link to='/status' className="tweet">
      <img src="https://github.com/Eric-Formiga.png" alt="imagem do usuario" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Eric Formiga</strong>
          <span>@EricFormiga</span>
        </div>
        <p>
         {props.content}
        </p>
        <div className="tweet-content-footer">
          <button type='button'>
          <ChatCircle/>
          20
          </button>
          <button type='button'>
          <ArrowClockwise/>
          20
          </button>
          <button type='button'>
          <Heart/>
          20
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Tweet
