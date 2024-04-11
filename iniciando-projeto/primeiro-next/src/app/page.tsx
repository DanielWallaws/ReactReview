"use client"

import { ToDoItem } from "@/types/ToDoItem";
import { useState } from "react";


//Aula Arrays em States - Excluir - Modulo 3 aula 14
const Page = ()=> {
  const [itemInput, setitemInput] = useState('');
  const [list, setList] = useState<ToDoItem[]>([
    { label: 'Fazer deve de casa', checked: false },
    { label: 'Comprar o bolo', checked: false }
  ]);
  const handleAddButton = ()=> {
    if(itemInput.trim() === '') return;
    setList([...list, {label: itemInput, checked: false}])
    setitemInput('')
  };
  const deleteItem = (index: number) => {
    setList(list.filter((item, key)=> key !== index))
  }


return (
   
  
    <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
     <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
      <div className="flex w-full max-w-lg my-3 p-4 rounded-md gb-gray-700 border-2 border-gray-500 bg-gray-600">
        <input 
        type="text" 
        placeholder="O que deseja fazer"
        className="flex-1 border-black p-3 pr-2 text-2xl text-black rounded-md mr-3" 
        value={itemInput}
        onChange={e => setitemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} Itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5 ">
        {list.map((item, index) => (
          <li>{item.label} - <button className="hover:underline" onClick={()=> deleteItem(index)}>[ deletar ]</button></li>
        ))}
      </ul>
    </div>
)}


 export default Page;

// "use client"

// import { ToDoItem } from "@/types/ToDoItem";
// import { useState } from "react";


// //Aula Arrays em States - Adicionar - Modulo 3 aula 13
// const Page = ()=> {
//   const [itemInput, setitemInput] = useState('');
//   const [list, setList] = useState<ToDoItem[]>([
//     { label: 'Fazer deve de casa', checked: false },
//     { label: 'Comprar o bolo', checked: false }
//   ]);
//   const handleAddButton = ()=> {
//     if(itemInput.trim() === '') return;
//     setList([...list, {label: itemInput, checked: false}])
//     setitemInput('')
//   };


// return (
   
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
//      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
//       <div className="flex w-full max-w-lg my-3 p-4 rounded-md gb-gray-700 border-2 border-gray-500 bg-gray-600">
//         <input 
//         type="text" 
//         placeholder="O que deseja fazer"
//         className="flex-1 border-black p-3 pr-2 text-2xl text-black rounded-md mr-3" 
//         value={itemInput}
//         onChange={e => setitemInput(e.target.value)}
//         />
//         <button onClick={handleAddButton}>Adicionar</button>
//       </div>

//       <p className="my-4">{list.length} Itens na lista</p>

//       <ul className="w-full max-w-lg list-disc pl-5 ">
//         {list.map((item, index) => (
//           <li>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
//         ))}
//       </ul>
//     </div>
// )}


//  export default Page;

// "use client"

// import { ToDoItem } from "@/types/ToDoItem";
// import { useState } from "react";


// //Aula Arrays em States - Exibir - Modulo 3 aula 12
// const Page = ()=> {
//   const [itemInput, setitemInput] = useState('');

//   const [list, setList] = useState<ToDoItem[]>([
//     { label: 'Fazer deve de casa', checked: false },
//     { label: 'Comprar o bolo', checked: false }
//   ]);
//   const handleAddButton = ()=> {
    
//   };


// return (
   
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
//      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
//       <div className="flex w-full max-w-lg my-3 p-4 rounded-md gb-gray-700 border-2 border-gray-500 bg-gray-600">
//         <input 
//         type="text" 
//         placeholder="O que deseja fazer"
//         className="flex-1 border-black p-3 pr-2 text-2xl text-black rounded-md mr-3" 
//         value={itemInput}
//         onChange={e => setitemInput(e.target.value)}
//         />
//         <button onClick={handleAddButton}>Adicionar</button>
//       </div>

//       <ul className="w-full max-w-lg list-disc pl-5 ">
//         {list.map(item => (
//           <li>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
//         ))}
//       </ul>
//     </div>
// )}


//  export default Page;

// "use client"

// import { useState } from "react";
// import { People } from "@/types/People";

// //Aula Atualizando objetos em States - Modulo 3 aula 11
// const Page = ()=> {
  
//   const [fullName, setFullName] = useState<People>({name: 'Bonieky', lastName: 'Lacerda'})
  
//   const handleClearButton = ()=> {
//     setFullName({...fullName, name:''})
//   }

// return (
   
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <input 
//       type="text" 
//       placeholder="Nome" 
//       className="border border-black p-3 text-2xl text-black rounded-md mb-3"
//       value={fullName.name}
//       onChange={ e=> setFullName({...fullName, name: e.target.value})} />
      
      
//       <input 
//       type="text" 
//       placeholder="Sobrenome" 
//       className="border border-black p-3 text-2xl text-black rounded-md mb-3"
//       value={fullName.lastName}
//       onChange={ e=> setFullName({...fullName, lastName: e.target.value})}/>
      
//       <p>Meu nome completo é:</p>
//       <p>{fullName.name} {fullName.lastName}</p>
//       <button onClick={handleClearButton} className="rounded-md bg-blue-500 p-2 mt-3">Limpar Nome</button>
//       </div>
// )}
// //Obs: no onChange a primeira tentativa para exemplos foi a onChange={ e=> setFullName({name: e.target.value, lastName: fullName.lastName})} 
// // o que não é útil tendo em vista que o objeto pode ter muitas propriedades e type pedirá todas elas
// // então a solução é a que está no onCHange agora.


//  export default Page;

// "use client"

// import { useState } from "react";

// //Aula State updater - Modulo 3 aula 10
// const Page = ()=> {
// const [count, setCount]  = useState(0);

// const handleButtonClick = () => {
//   setCount(c => c + 2)
//   setCount(c => c + 2)
//   setCount(c => c + 2)
//   //setCount(10)
//   //setCount(20)
//   //setCount(30)
// }

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//     <p>
//       {count}
//     </p>
//     <button onClick={handleButtonClick} className="bg-blue-700 text-white p-3 rounded-md">+6</button>
      
//       </div>
// )}


//  export default Page;

// "use client"

// import { useState } from "react";

// //Aula states mudando no tempo - Modulo 3 aula 9
// const Page = ()=> {

  

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      
//       </div>
// )}


//  export default Page;

// "use client"

// import { useState } from "react";

// //Aula using states em campos - Modulo 3 aula 8
// const Page = ()=> {
//   const [nameInput, setNameInput] = useState('')
//   const handleClickButton = ()=> {
//     alert(nameInput)
//   }

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <input 
//       type="text" 
//       className="border border-black p-3 text-xl text-black rounded"
//       placeholder="Digite seu nome"
//       value={nameInput}
//       onChange={e=> setNameInput(e.target.value)}
//       />
//       <p>Seu nome é: {nameInput}</p>
//       <button onClick={handleClickButton} className="p-3 bg-blue-500 rounded mt-3">Mostrar valor do campo</button>
//       </div>
// )}


//  export default Page;

// "use client"

// import { useState } from "react";

// //Aula usando state para auxiliar UI - Modulo 3 aula 7
// const Page = ()=> {
//   const [showSecret, setShowSecret] = useState(false);

//   const handleClickButton = ()=> {
//     setShowSecret(!showSecret)
//   }

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <p></p>
//       <button onClick={handleClickButton} className="p-3 bg-blue-500 rounded">{showSecret ? 'Ocultar' : 'Mostrar'} Área Secreta</button>
//       {showSecret &&
//       <div className="p-3 rounded-md bg-blue-300 mt-3">Área Secreta</div>
//       }    
//       </div>
// )}


//  export default Page;

// "use client"

// import { useState } from "react";

// //Aula usando state - Modulo 3 aula 6
// const Page = ()=> {
//   const [count, setCount] = useState<number>(0)

//   const handleClickButton = ()=> {
//     setCount(count+1)
//   }

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
//       <p>{count}</p>
//       <button onClick={handleClickButton} className="p-3 bg-blue-500">+1</button>
//     </div>
// )}


//  export default Page;

// "use client"
// //Aula sobre state - Modulo 3 aula 5
// const Page = ()=> {
//   let count = 0;

//   const handleClickButton = ()=> {
//     count++;
//   }

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center">
//       <p>{count}</p>
//       <button onClick={handleClickButton} className="text-white p-3 g-blue-500"></button>
//     </div>
// )}


// export default Page;

//aula 4 usando o prevent default;
// import { FormEvent } from "react";

// const Page = ()=> {
//   const handleFormSubmit = (event: FormEvent<HTMLFormElement>)=> {
//     event.preventDefault();
//     alert('Logando...');
//     }

// return (
  
//     <div className="w-screen h-screen flex flex-col justify-center items-center">
//       <h1 className="text-5xl mb-3">Form de Login</h1>
//       <form onSubmit={handleFormSubmit}>
//         <input className="mr-2" type="text" />
//         <input className="rounded-md bg-blue-700 pl-2 pr-2" type="submit" value="Enviar"/>
//       </form>
//     </div>
// )
// }

// export default Page;

// import { CustomButton } from "@/components/CustomButton"; 
//Aula 3 do módulo 3 "passando eventos via props"
// const Page = ()=> {

//   const handleButton1 = () => alert('Clicou no botão 1');
//   const handleButton2 = () => alert('Clicou no botão 2');
//   const handleButton3 = () => alert('Clicou no botão 3');

// return (
  
//     <div className="w-screen h-screen flex justify-center items-center">
//       <CustomButton label="Botão 1" onClick={handleButton1}/>
//       <CustomButton label="Botão 2" onClick={handleButton2}/>
//       <CustomButton label="Botão 3" onClick={handleButton3}/>
//     </div>
// )
// }

// export default Page;

// const Page = ()=> {
//     const avisar = (msg: string) => {
//       alert(msg)
//     }

// // const Page = ()=> {
// //   const handleButtonClick = () => {
// //     alert('Deu certo')
// //   }
//   // function handleCLick() {
//   //   alert("Funcionou porra!");
//   // }
//   return (
    
//       <div className="w-screen h-screen flex justify-center items-center">
      
//       {/* <button onClick={()=> avisar('Mensagem 1')} className="p-3 bg-blue-700 text-white rounded-md mr-3">Clique aqui</button>
//       <button onClick={()=> avisar('Mensagem 2')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button> */}

//       {/* <button onClick={handleButtonClick} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button> */}

//       {/* <button onClick={()=> alert('Funcionou')} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button> */}
      
//       {/* <button onClick={function click() {
//         alert("Funcinou 2")
//       }} className="p-3 bg-blue-700 text-white rounded-md">Clique aqui</button> */}

//       </div>
//   )
// }

// export default Page;


// import { StudentTable } from "@/components/StudentTable";
// import { students } from "@/data/students";

// const Page = ()=> {

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-5xl mb-5">Lista de estudantes</h1>
//       <StudentTable students={students}/>
//     </div>
//   )
// }

// export default Page;

// import { AmountEmoji } from "@/components/AmountEmoji";

// const Page = ()=> {
//   type Props = {
//     nota: number;
// }

//   return (
//     <div className="w-screen h-screen flex justify-center items-center">
      
//       <>
//         <AmountEmoji rate={2}/>
//       </>
      
//     </div>
//   )
// }

// export default Page;

// import { gradienteStyle } from '@/components/StylePage';
// import { CurrentHour } from '@/components/CurrentHour';

// const Page = ()=> {

//   return (
//     <div style={gradienteStyle}>
//       <CurrentHour></CurrentHour>

//     </div>
//   )
// }

// export default Page;

// import {peopleList} from '@/data/peopleList';

// const Page = () => {

//   const chemists = peopleList.filter(person => person.profession === 'chemist');
  
//   return (
//     <div>
//       <h1 className="font-bold text-2xl">Olá mundo</h1>
//       <h3>Algum texto</h3>
      
//       {chemists.length > 0&&
//         <>
//           <h3>Lista de Químicos</h3>
//           <ul>
//             {chemists.map(person=>
//             <li key={person.id}>{person.name}</li>
//             )}
//           </ul>
//         </>
//       }
      
      
//       {/* {peopleList.length > 0 &&
//         <ul>
//           {peopleList.map(person => 
//             <li key={person.id}>  {person.name} - {person.profession}</li>)
//           }
//         </ul>
//       }

//       {/* <ul>
//         {peopleList.map(person => 
//         <li key={person.id}>  {person.name} - {person.profession}</li>)
//         }
//       </ul> */}


//     </div>
//   )
// }

// export default Page;


// import { Card } from "@/components/Card";
// // import { Person } from "@/components/Person";
// // import { Carattere } from "next/font/google";
// // import { GeoForms } from "@/components/GeoForms";

// const Page = () => {
//   return (
//     // apesar das declarações abaixo se assemelharem a html elas não são. Na verdade são sintax do jsx
//     <div>
//       <h1 className="font-bold text-2xl " >Olá mundo</h1>
//       <h3 className="">Algum outro texto</h3>
      
//       {/* <Card phrase="Alguma frase TOP" author="Coach de milhões"/> */}
      // <Card phrase="Alguma frase TOP" author="Napoleão Hill"/>
      {/* <Card>
        <>
        <h3 className="text-3xl font-bold italic">"Frase de efeito"</h3>
        <p className="text-right text-sm">- Autor deconhecido</p>
        </>
      </Card> */}
      
       
      {/*Aula 8*/}
      {/* <Person
        name="Elon Musk"
        avatar='https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg'
        roles= {['CEO da Tesla', 'CEO da SpaceX', 'CEO da Neuralink', 'CEO da Starlink']}
      />

      <Person
        name="Jeff Bezos"
        avatar='https://investidorsardinha.r7.com/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-scaled.jpg'
        roles= {['CEO da Amazon', 'CEO da Blue Origin']}
      />

      <Person
        name="João"
        roles= {['CEO de algo', 'CEO da empresa tal']}
        
      /> */}
//     </div>
    
//   );
// }

// export default Page;

// const Page = () => {
//   return (
//     // apesar das declarações abaixo se assemelharem a html elas não são. Na verdade são sintax do jsx
//     <div>
//       <h1 className="font-bold text-2xl">Olá mundo</h1>
//       <h3>Algum outro texto</h3>

//       <GeoForms/>
//     </div>
    
//   );
// }

// export default Page;

// function Page() {
//   return (
//     // apesar das declarações abaixo se assemelharem a html elas não são. Na verdade são sintax do jsx
//     <div>
//       <h1 className="font-bold text-lg">Olá mundo</h1>
//       <h3>Algum texto</h3>
//     </div>
    
//   )
// }

// Posso chamar a função também por uma arrow function
