import {peopleList} from '@/data/peopleList';

const Page = () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist');
  
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá mundo</h1>
      <h3>Algum texto</h3>
      
      {chemists.length > 0&&
        <>
          <h3>Lista de Químicos</h3>
          <ul>
            {chemists.map(person=>
            <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }
      
      
      {/* {peopleList.length > 0 &&
        <ul>
          {peopleList.map(person => 
            <li key={person.id}>  {person.name} - {person.profession}</li>)
          }
        </ul>
      }

      {/* <ul>
        {peopleList.map(person => 
        <li key={person.id}>  {person.name} - {person.profession}</li>)
        }
      </ul> */}


    </div>
  )
}

export default Page;


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
