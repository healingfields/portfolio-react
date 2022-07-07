import React from 'react'
import './List.css'

function List({ items, styling }) {
    return (
        <ul className={styling}>
            {items.map((item) => (
                <li key={item.field}>
                    <span>{item.field}:</span>
                    {item.value}
                </li>
            ))}
        </ul>
    )
}

export default List;