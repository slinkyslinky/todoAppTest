import React from 'react'
import { Tasks } from '../../configs/types'

export default function Task(props: Tasks) {
   return (
      <div>
         <h5>{props.title}</h5>
         <p>{props.description}</p>
      </div>
   )
}
