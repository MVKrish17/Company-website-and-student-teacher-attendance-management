import React from 'react'
import './Tableitem.css'
function Tableitem({name,mail}) {
  return (
      <tr>
          <th><input className="box" type="checkbox" /></th>
          <td>{name}</td>
          <td>{mail}</td>
          <td><input className="box" type="checkbox" /></td>
          <td><input className="box" type="checkbox" /></td>
      </tr>
  )
}

export default Tableitem
