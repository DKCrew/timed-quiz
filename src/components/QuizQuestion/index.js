import React from 'react'

class QuizQuestion extends React.Component{
  render(){
    return(
      <>
      <h2>This is the Question</h2>
      <input type="button" value="Answer 1" className = "answerButton" onClick={() => this.props.nextQuestion}/>
      <input type="button" value="Answer 2" className = "answerButton" onClick={() => this.props.nextQuestion}/>
      <input type="button" value="Answer 3" className = "answerButton" onClick={() => this.props.nextQuestion}/>
      <input type="button" value="Answer 4" className = "answerButton" onClick={() => this.props.nextQuestion}/>
      </>
    )
  }
}

export default QuizQuestion