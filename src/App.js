import Change from './compomponents/Change'
import { useState } from 'react';
import './App.css';

// const inputval={
//   name:'Meri'

// }
function App() {
  const[name,setName]=useState({})
  // const [email, setEmail] = useState()
	// const [phone, setPhone] = useState()
  function nameChangeHandler(event){
		setName((prevState)=>{
      return{
      ...prevState,
val:event.target.value,

    }
    })
	}
//   function emailChangeHandler(event){
// 		setValue((prevState)=>{
//       return{
//       ...prevState,
// val:event.target.value,

//     }
//     })
// 	}
//   function phoneChangeHandler(event){
// 		setValue((prevState)=>{
//       return{
//       ...prevState,
// val:event.target.value,

//     }
//     })
// 	}
  return (
    <div className="App">
      {/* {console.log(value)} */}
      <input  onChange={nameChangeHandler}/>
      {/* <input  onChange={emailChangeHandler}/>
      <input  onChange={phoneChangeHandler}/> */}
     <Change name={name.val}
    //  email={email.val}
    //  phone={email.val} 
     />
    </div>
  );
}

export default App;
