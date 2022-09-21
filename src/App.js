import { Button, Input, Textarea, Container,Stack, Grid  } from '@mantine/core';
import "./App.css";
import CardComponent from "./components/Card";
import { useState } from "react";


const App = () => { 

  let name = "Yunus"
  let isActive = true;
  let theMountain = {
    name : "Everest",
    height : 10000,
    volcanicActivity: false,
    mountain: {
      name : "mini tepe",
      height: 2000,
    },
  };

  const [title,setTitle] =  useState(""); 
  const [paragraf,setParagraf] =  useState("") 
  const [list, setList] = useState( [
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
   
   
  ],
 );
  const click = () => {
   
    setTitle("");
    setParagraf("");

    const copyList = () => [...list];
    list.push({
      id : 5,
      title,
      par : paragraf,
    });
    setList(copyList);
  
  };  
  
   return  <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
       <Input.Wrapper label="Başlık">
        
       <Input 
       label="Başlık" 
       placeholder="Başlık yazınız" 
       width={400} 
       value={title}    
       onChange={(e) => setTitle(e.target.value)}   
       />
        
       </Input.Wrapper>
      
      
       <Textarea
       placeholder="Paragraf yazınız"
       label="Paragraf"
       withAsterisk
       value={paragraf}
       onChange={(e) => setParagraf(e.target.value)} 
       
       /> 

       <Button variant="outline" onClick={click}> 
        Kart Oluştur
        </Button>
      </Stack>
      
     <h2>Kartlar</h2>
      <Grid >
        {list.map(({title, par} , i)  => (
            <Grid.Col span={4} key={`index ${i}`}>
              <CardComponent
                title={title}
                par={par}  
                
                index={i}
                click={() => {
                 let copyList = [...list];
                 copyList.splice(i, 1);
                 setList(copyList);
                 
                  console.log("Dışarıdan tıklanıldı");
                }}
                />
            </Grid.Col>
        ))}
     </Grid>
    </Container>;
}
export default App;

// github deneme
