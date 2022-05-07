import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)
  
  return (
    <div className="App">
      <div className="Order">
        <label className="name">
          Name:
          <input type="textbox"
          className="textbox"
          onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          <input type="checkbox" 
          checked={pepperoni}
          onChange={() => setPepperoni(!pepperoni)}/>
          Pepperoni
        </label>
        <label>
          <input type="checkbox"
          checked={sausage}
          onChange={() => setSausage(!sausage)}/>
          Sausage
        </label>
        <label>
          <input type="checkbox"
          checked={peppers}
          onChange={() => setPeppers(!peppers)}/>
          Peppers
        </label>
        <label>
          <input type="checkbox"
          checked={onions}
          onChange={() => setOnions(!onions)}/>
          Onions
        </label>
      </div>
      
      <div className="display">
        <h1>Order name:</h1>
        <h1>{name && <div>{name}</div>}</h1>
        <h2>Selected toppings:</h2>
        <p>{pepperoni && <div>Pepperoni</div>}</p>
        <p>{sausage && <div>Sausage</div>}</p>
        <p>{peppers && <div>Peppers</div>}</p>
        <p>{onions && <div>Onions</div>}</p>
      </div>
    </div>
  );
}

export default App;
