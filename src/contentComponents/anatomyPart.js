import React from 'react'



export default function AnatomyPart(props){
  return (
    <div className="anatomy_part card_">
      <a href="#">
        <h2 className="name_anatomy_part">{props.partname}</h2>
        <img src={props.img} alt="" className="card_item slaiderImg"/>

        </a>

    <hr/>
    </div>
  )
}
