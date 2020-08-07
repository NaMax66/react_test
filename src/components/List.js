import React from "react"
import ListItem from "./ListItem"
export default function() {
  let a = [1, 2, 3]
  return <div>
    {a.map(item => {
      return <ListItem key={item}/>
    })}
  </div>
}
