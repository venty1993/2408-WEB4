import logo from './logo.svg';
import './App.css';
import Post from './Post';
import { useRef, useState } from 'react';


function App() {

  const element = <h1 className='title'>안녕하세요 h1입니다</h1>

  const data = [{
      title : '첫글은 내꺼야',
      text : '반갑습니다'
    },{
      title : '첫번째글인가?',
      text : '아니었네~'
    },{
      title : '등수놀이 유치해',
      text : '철좀 들어'
    }]


    // useState, useEffect, useContext, useRef, useReducer
    // let number = 0 ;
    const [ number , setNumber ] = useState(0)
    const handleIncressNumber = () =>{
      setNumber(number+1)
    }

    const [text,setText] =useState('');
    const handleChangeText = (e) =>{
      setText(e.target.value)
    }

    const [inputText, setInputText] = useState('');
    const inputFocus = useRef()
    const handleChangeTextToButton = () => {
      setInputText(inputFocus.current.value)
    }



  return (
    <div className="App">
      {element}

      <span>{number}</span>
      <button onClick={handleIncressNumber}>딸깍</button>

      <input type="text" onChange={handleChangeText}/>
      <p>당신의 입력 : {text}</p>

      <input type="text" ref={inputFocus}/>
      <button onClick={handleChangeTextToButton}>인풋딸깍</button>
      <p>버튼누르면 : {inputText}</p>

      {data.map((value,key)=>
        <p>{value.title}</p>
      )}

      {data.map((value,key)=>
        <Post 제목={value.title} 내용={value.text}></Post>
      )}
    </div>
  );
}

export default App;
