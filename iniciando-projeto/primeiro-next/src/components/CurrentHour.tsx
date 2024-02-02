export const CurrentHour = ()=>{
    const now = new Date;
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const formatedHour = hour <10 ? `0${hour}` : hour;
    const formatedMinutes = minutes <10 ? `0${minutes}` : minutes;
    const nowHour = `${formatedHour }:`+ formatedMinutes;

    let greeting:any;

    if(hour >= 5 && hour < 12){
        greeting = 'Bom dia!😁';
    }
    if(hour >= 12 && hour <=18){
        greeting = 'Boa tarde!🫠';
    } 
    if(hour >18 && hour < 4){
        greeting = 'Boa noite!😴';
    }
    
    // if(hour >= 5 && hour < 12){
    //     greeting = 'Bom dia!😁';
    // }else if(hour >= 12 && hour <=18){
    //     greeting = 'Boa tarde!🫠';
    // } else{
    //     greeting = 'Boa noite!😴';
    // }

    return (
        <div >
            <div className="w-screen h-screen flex flex-col justify-center items-center text-white ">
                 <div className="text-9xl">{nowHour}</div>
                 <div className="text-5xl font-bold">{greeting}</div>
            </div>
            
        </div>
    );

}

// export const currentFulfillment = ()=> {

// }