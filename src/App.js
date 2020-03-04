import React from 'react';
import './App.css';
import QuizQuestion from './components/QuizQuestion';

class TitlePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {titleText:"Welcome to our Quiz!"}
    this.counter = 0
    this.timeLimit = 10
  }
  start(){
    console.log("starting!");
    this.counter = 0;
    this.timer = setInterval(()=> {
      console.log("Interval Called!")
      this.counter++
      if(this.counter < this.timeLimit){
      this.setState({titleText:"Start the Quiz! " + this.counter})
      }
      else {
        this.setState({titleText:"Time's Up!"})
        clearInterval(this.timer);
      }
    },1000);
  }
  
render(props){
  return (
    <div classname = 'App'>
      <h1 classname ='title'>{this.state.titleText}</h1>
      <input id = "startButton" type= "button" value = " Start " onClick={() => this.start()}/>
      <QuizQuestion />
      {/* <input id = "answerButton" type= "button" value = "Answer" onClick={() => this.Answer()}/> */}
    </div>
    )
  }
}


function App() {
 return(
   <TitlePage />
 )
}

export default App;
