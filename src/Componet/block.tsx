import React from "react";
import '../App.css'

interface blockProps{
    value ?: string | null;
    onClick ?: ()=>void;
}

const Block:React.FC <blockProps>=(props)=>{
    return(
        <div onClick={props.onClick} className="block">{props.value}</div>
    )
}

export default Block;
























// import React from "react";
// interface blockprops{
//     value?: string | null;
//     onClick?: ()=>void
// }
// const Block :React.FC <blockprops>=(props)=>{
    
//     return (
//         <div onClick={props.onClick} className="block">{props.value}</div>
//     )
// }
// export default Block;