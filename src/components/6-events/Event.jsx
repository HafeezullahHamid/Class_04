// import { useState } from "react";

// export const Event = () => {
//   const[firstName,setfirstName]=useState("Arifa");


//   // const ClickHandler=(name)=>{
//   //   setfirstname(name);
//   // }
//   return (
//     <div>my name is{firstName}</div>
//   )
// }



// import { useState } from "react";

// export const Event = () => {
//   // const[firstName,setfirstName]=useState("Arifa");

//   const clickhandler=()=>{
//     console.log("hello its running")
//   }
//   return (
//     <>
//      {/* <div>my name is{firstName}</div> */}
//      <button onClick={clickhandler()}>Change Name</button>
//     </>
   
    
//   )
// }


// export const Event = () => {
//   const[firstName,setfirstName]=useState("Arifa");

//   const clickhandler=(val)=>{
//     console.log(val)
//   }
//   return (
//     <>
//      {/* <div>my name is{firstName}</div> */}
//      <div>
//      <button onClick={()=>clickhandler("hello")}>chamge name</button>
//      </div>
    
//     </>
   
    













//   )
// }

// export const Event = () => {

//   const clickhandler=(val)=>{
//     console.log(val)
//   }
//   return (
//     <>
//      <div>
//      <button onClick={()=>{return clickhandler("hello")}}>chamge name</button>
//      </div>
    
//     </>
   
    
//   )
// }


// export const Event = () => {
//   const[firstName,setfirstName]=useState("Arifa");
//   const clickhandler=()=>{
//     setfirstName("Hussain");
//   }
//   return (
//     <>
//      <div>
//       <div>My firstName:{firstName}</div>
//      <button onClick= {clickhandler}>change name</button>
//      </div>
    
//     </>
   
    
//   )
// }
// import { useState } from "react";
// export const Event = () => {
//   const[firstName,setfirstName]=useState("Arifa");
//   const clickhandler=(val)=>{
//     setfirstName(val);
//     console.log("logic 01")
//     console.log("logic 02")
//     console.log("logic 03")
//   }
//   return (
//     <>
//      <div>
//       <div>My firstName:{firstName}</div>
//       {/* <button onClick= {clickhandler}>change name</button> */}
//      <button onClick={()=> clickhandler("noor")}>change name</button>
//      </div>
    
//     </>
   
    
//   )
// }

import { useState } from "react";
// export const Event = () => {
//   const[firstName,setfirstName]=useState("Arifa");
//   const clickhandler=(val)=>{
//     setfirstName(val);
//     console.log("logic 01")
//     console.log("logic 02")
//     console.log("logic 03")
//   }
//   return (
//     <>
//      <div>
//       <div>My firstName:{firstName}</div>
//       {/* <button onClick= {clickhandler}>change name</button> */}
//      <button onClick={()=> setfirstName("noor")}>change name</button>
//      </div>
    
//     </>
   
    
//   )
// }






// import React, { useState } from 'react';

// export function Event() {
//   const myarr = ["Hafeezullah", "Hamid"];

//   const [firstName, setFirstName] = useState(myarr[0]);

//   const handleClick = () => {
//     setFirstName(myarr[1]);
//   };

//   return (
//     <>
//       <div>
//         <div>My firstName: {firstName}</div>
//         <button onClick={handleClick}>change name</button>
//       </div>
//     </>
//   );
// }


export const Event = () => {
  const myarr=["Hafeezullah","Hamid"];

  const[firstName,setfirstName]=useState(myarr[0]);
  return (
    <>
     <div>
      <div>My firstName:{firstName}</div>
      {/* <button onClick= {clickhandler}>change name</button> */}
     <button onClick={()=> setfirstName(myarr[1])}>change name</button>
     </div>
    
    </>
  )
}