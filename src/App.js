import './App.css';
import Die from "./Die.js";
function App() {
  let [diceFace,setDiceFace] = React.useState(allNewDice());

  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function allNewDice(){
    const newDice = [];
    for(let i = 0 ; i < 10 ; i++){
      let dieNum = randomIntFromInterval(1,6);
      newDice.push(dieNum);
    }   
    return newDice;
  }

  // const diceElements = diceFace.map()
  return (
    <div className='app--container'>
      <main className='main--container'>
        <div className='dice-container'>
          {diceFace}
        </div>
      </main>
    </div>
  );
}

export default App;
