import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  var word = "";
  var rand = Math.floor(Math.random()*6)+1;
  if(rand == 1) {
    word = "Hello";
  }
  else if(rand == 2){
    word = "Computer";   
  }
  else if(rand == 3){
    word = "Engineer";
  }
  else if(rand == 4){
    word = "Faculty";
  }
  else if(rand == 5){
    word = "Logic";
  }
  else if(rand == 6){
    word = "Depart";
  }

  return (
    <body>
      
<script>

</script>
      <center><br></br><h1>Welcome to Game!</h1><br></br></center>
      <h2>Click the random button to change question!</h2>
      <button className="button button1"><a href="http://localhost:3000/" >Random</a></button>
      <button onclick="myFunction()" className="button button2">Answer</button>
      <h2>Arrange the correct words</h2>
      
      <div>
        
        <WordCard value={word}/>
      </div> 
      
    </body>
  );
}

export default App;



