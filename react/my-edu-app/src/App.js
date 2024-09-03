import logo from './logo.svg';
import './App.css';
import Post from './Post';


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


  return (
    <div className="App">
      {element}

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
