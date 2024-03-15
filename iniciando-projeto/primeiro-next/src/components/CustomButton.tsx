//Aula 3 do módulo 3 "passando eventos via props"
type Props = {
    label: string;
    onClick: ()=> void;
}

export const CustomButton = ({label, onClick}: Props)=> {
    const handleButtonClick = ()=> {
        //alguma coisa
        onClick();
        // depois de alguma coisa
    }

    return (
        <button onClick={handleButtonClick} className="p-3 text white bg-blue-700 rounded-md mr-2">{label}</button>
    )
}
    //first method
    // return (
    //     <button onClick={onCLick} className="p-3 text white bg-blue-700 rounded-md mr-2">{label}</button>
    // )
    //}