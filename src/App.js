//import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
    {   id:1,
        title:"Dağ 1",
        par: "Açıklama 1"
    },
    { 
        id:2,
        title:"Dağ 2",
        par: "Açıklama 2"
    }, {
        id:3, 
        title:"Dağ 3",
        par: "Açıklama 3"
    },
];


//aaaaaaa


const App = () => { 
  const [lesson, setLesson] = useState(11);
   
   return <div>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button onClick={() => {
        setLesson(lesson + 1);
      }}
      
      >Ders Arttır</button>

      <button onClick={() => {
        setLesson(lesson - 1);
      }}
      
      >Ders Azalt </button>

      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({title, par} , i)  => (
         <Card 
         key={`index ${i}`}
         title={title}
         par={par}  
         lesson={lesson} 
         index={i}
         
         />

        ))}
     </div>
    </div>;
    
  
}

export default App;
