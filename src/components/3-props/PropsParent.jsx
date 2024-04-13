import PropsComp from "./PropsComp"

const PropsParent = (props) => {
    console.log(props)

    let myclass1 = "class01"
    let myclass2 = "class02"
    let myclass3 = "class03"

  return (
   <div>
     <PropsComp myname="Arifa" anything={myclass1}/>
     <PropsComp myname="Batool" anything={myclass2}/>
     <PropsComp myname="Hanya" anything={myclass3}/>
   </div>
  )
}

export default PropsParent