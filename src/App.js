import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import { setState, useState } from 'react' ;


function App() {
 
  //handleClick=()=>{this.setState({show:!this.show}); console.log(this.show)}
  /*render() {
    return(
      <div>
      <h1>Hello {this.state.name}</h1>
      <button onClick={this.handleClick}> ClickMe</button>
      </div>
      
    )
  }*/
  const [fullName, setFullName] = useState('*******')
  const [bio, setBio] = useState('*******')
  const [imgSrc, setImgSrc] = useState('*******')
  const [profession, setprofession] = useState('*******')

  const [show, setShow] = useState(1);
  const handleClick= () => {
    setShow(show+1)
  }
    
      if(show%2==0) {
        return (
          <div>
      <h1>Hello {fullName}</h1>
      <h1>Hello {bio}</h1>
      <h1>Hello {imgSrc}</h1>
      <h1>Hello {profession}</h1>
      <button onClick={handleClick}> ClickMe</button>
      </div>
      
          
        );
      } else {
        return (
         <div>
           <button onClick={handleClick}> ClickMe</button>
         </div>
        );
      }
    
  
    }







export default App;
