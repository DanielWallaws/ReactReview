// const getWeekday = () => {
//     return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date())
// };

type Props = {
    name: string;
    avatar?: string;
    roles:string[];
}
// type Props = {
//     name: string;
//     avatar: string;
//     roles:string[];
//     addrees?:string;
// }

export const Person = ({
    name, 
    avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdCg_kUrqyR24cpisv_5jO0XJe1XKxOCO3A&usqp=CAU', 
    roles
}: Props) => {
    // const data = {
    //     name: 'Elon Musk',
    //     avatar:'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg',
    //     roles: ['CEO da Tesla', 'CEO da SpaceX', 'CEO da Neuralink', 'CEO da Starlink']

    // }


    return (
        <div className="p-4">



            <h1>{name}</h1>
            <img 
            src= {avatar}
            alt={name} 
            className="w-40"
            />
            <ul>
                <li>{roles[0]}</li> 
                <li>{roles[1]}</li>
                {/* <li>{data.roles[2]}</li>
                <li>{data.roles[3]}</li> */}
            </ul>
        </div>
    )

    // const {name, avatar, roles} = props;

    // return (
    //     <>



    //         <h1>{name}</h1>
    //         <img 
    //         src= {avatar}
    //         alt={name} 
    //         className="w-40"
    //         />
    //         <ul>
    //             <li>{roles[0]}</li> 
    //             <li>{roles[1]}</li>
    //             {/* <li>{data.roles[2]}</li>
    //             <li>{data.roles[3]}</li> */}
    //         </ul>
    //     </>
    // )

    // return (
    //     <>
    //         <h1>{props.name}</h1>
    //         <img 
    //         src= {props.avatar}
    //         alt={props.name} 
    //         className="w-40"
    //         />
    //         <ul>
    //             <li>{props.roles[0]}</li> 
    //             <li>{props.roles[1]}</li>
    //             {/* <li>{data.roles[2]}</li>
    //             <li>{data.roles[3]}</li> */}
    //         </ul>
    //     </>
    // )
    // return (
    //     <>
    //         <h1 style={{color: 'red', fontSize: '30px'}}>Elon Musk - {getWeekday()}</h1>
    //         <img 
    //         src= {data.avatar}
    //         alt={data.name} 
    //         className="w-40"
    //         />
    //         <ul>
    //             <li>{data.roles[0]}</li> 
    //             <li>{data.roles[1]}</li>
    //             <li>{data.roles[2]}</li>
    //             <li>{data.roles[3]}</li>
    //         </ul>
    //     </>
    // )
}

//     return (
//         <>
//             <h1>Elon Musk</h1>
//             <img 
//             src="https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk.jpg" 
//             alt="Elon Musk" 
//             className="w-40"
//             />
//             <ul>
//                 <li>CEO da Tesla</li> 
//                 <li>CEO da SpaceX</li>
//                 <li>CEO da Neuralink</li>
//                 <li>CEO da Starlink</li>
//             </ul>
//         </>
//     )
// }