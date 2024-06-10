import { Circle } from "./Circle"
import { Square } from "./Square"

export const GeoForms = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold">Formas geométricas</h3>
            <div className="flex gap-2 border-2 p-3" >
                <Square/>
                <Circle/>
            </div>
        </div>
    )
    
}

// const Rectangle = ()=> {
//     return (
//         <div className="w-80 h-52 bg-orange-700 text-white">
//             Texto inspirador
//         </div>
//     )
// }

// export default Rectangle;