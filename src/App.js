import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [length, setLength] = useState(10)
  const [primeArray, setPrimeArray] = useState([])

  //function isPrime() below checks if a number is prime or not and 
  //returns true or false. True if the nuber is prime AND false if it is not

  const isPrime = (number)=>{
      if(number <2){
        return false
      }

      let squareRoot = Math.ceil(Math.sqrt(number))

      for(let i = 2; i<=squareRoot; i++){
        if(number === 2){
          return true
        }else if(number % i === 0){
          return false
        } 
      }
      return true
  }

  //function generatePrimeArray() below takes an arbitrary length
  //and generates an array of prime numbers of the given length.


  const generatePrimeArray = ()=>{
    let counter = 1;
    let primeArray = []

    while(primeArray.length < length){
      if(isPrime(counter)){
        primeArray.push(counter)
      }
      counter++
    }
    return primeArray
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setPrimeArray(generatePrimeArray())
  }

  useEffect(()=>{
    setPrimeArray(generatePrimeArray())
  },[])


  return (
    <div className="app-container">
      <h2>Prime numbers multiplication table</h2>
      <div className="instructions">
        <p>The table below shows the multiplication of prime numbers.</p>
        <p>It shows the multiplication of the first 10 prime numbers by default</p>
        <p>The prime numbers and the multiplications are <b>dynamically generated </b> 
         and you can change the number to suit the number of prime numbers multiplication you want to view on the table.
        </p>
        <p><b>You can specify any arbitrary number in the input box below.</b></p>
      </div>

      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <input onChange={(e)=>setLength(e.target.value)} type="text" placeholder="Enter number" />
          <button>Submit</button>
        </form>
      </div>

      <div className="table-conatiner">
        <table>
          <thead>
            <tr>
              <th></th>
              {primeArray.map((prime, index)=>(
                <th key={index}>{prime}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {primeArray.map((prime, index)=>(
              <tr key={index}>
                <td>{prime}</td>
                {primeArray.map((primeNum, ind)=>(
                  <td key={ind}>{prime * primeNum}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{textAlign: "center"}}>Created by Samuel Offem. samoffem@gmail.com</p>
    </div>
  );
}

export default App;
