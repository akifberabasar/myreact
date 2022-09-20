import { Button, Input, Textarea, Container,Stack  } from '@mantine/core';

import "./App.css";
import CardComponent from "./components/Card";
import { useState } from "react";

let arr = [
    {   id:1,
        title:"Dağ 1",
        par: "Açıklama 1",
    },
    { 
        id:2,
        title:"Dağ 2",
        par: "Açıklama 2",
    }, {
        id:3, 
        title:"Dağ 3",
        par: "Açıklama 3",
    },
    {
      id:4, 
      title:"Dağ 4",
      par: "Açıklama 4",
  },
];





const App = () => { 
  const [title,setTitle] =  useState(""); 
  const [paragraf,setParagraf] =  useState("") 
  const [list, setList] = useState(arr);
  const click = () => {
    console.log("butona tıklandı" , title ,paragraf);
    const copyList = () => [...list];
    list.push({
      id : 5,
      title: "dağ 5",
      par: "açıklama 5",
    });
    setList(copyList);
  
   };  
   
   return  <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
       <Input.Wrapper label="Başlık">
       <Input label="Başlık"  placeholder="Başlık yazınız" width={400} value={title}  onChange={(e) => setTitle(e.target.value)} />
       </Input.Wrapper>
      
      
       <Textarea
       placeholder="Paragraf yazınız"
       label="Paragraf"
       value={paragraf}
       onChange={(e) => setParagraf(e.target.value)} 
       
       />
    
      
       <Button variant="outline" onClick={click}> 
        Kart Oluştur
        </Button>
      </Stack>
      
     <h2>Kartlar</h2>

      <div className="Cards">
        {arr.map(({title, par} , i)  => (
         <CardComponent
         key={`index ${i}`}
         title={title}
         par={par}  
         
         index={i}
         
         />

        ))}
     </div>
    </Container>;
    
  
}

export default App;
