type Props = {
    rate: number;
}

export const AmountEmoji = ({rate}:Props)=> {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;
    
    const emojis =['😶', '😡', '😡', '🙂', '😁', '😎' ];
    let rateInt = Math.floor(rate);

    const stars = `${emojis[rateInt]}`.repeat(rateInt) + emojis[0].repeat(5 - rateInt);

    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
            <div className="ml-3">{stars}</div>
        </div>
    )
}


// type Props = {
//     rate: number;
// }

// export const AmountEmoji = ({rate}:Props)=> {
//     //Para preservarmos o princípio de imutabilidade das Props, 
//     ///vou encapsular rate em outra variável e modificar essa variável e não diretamente o props.
//     let adjustedRate= rate;
//     if(adjustedRate >5 ) adjustedRate = 5;
//     if(adjustedRate <0) adjustedRate = 0;

//     const rateInt = Math.floor(adjustedRate);
    
//     const defaultEmoji = '😶'.repeat(5-rateInt)
//     let emoji = '';
//     if(adjustedRate >=0 && adjustedRate <=2) {
//         emoji = '😡'.repeat(rateInt)
//     }else if(adjustedRate == 3) {
//         emoji = '🙂'.repeat(rateInt)
//     }else if(adjustedRate == 4) {
//         emoji = '😁'.repeat(rateInt)
//     }else if(adjustedRate == 5) {
//         emoji = '😎'.repeat(rateInt)
//     }

//     return (
//         <div className="flex items-center text-6xl">
//             <div className="bg-gray-700 p-2 rounded">{adjustedRate.toFixed(1)}</div>
//             <div className="ml-3">{emoji+defaultEmoji}</div>
//         </div>
//     )
// }
