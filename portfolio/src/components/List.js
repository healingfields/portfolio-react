import React from 'react'

function List({ items }) {
    return (
        <ul className='profile-list'>
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