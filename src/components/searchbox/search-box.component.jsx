import React from 'react'

export const Searchbox = ({placeholder, handelChange}) => (
    <input type="search" 
            className="mt10 mb20"
            placeholder={placeholder}
            onChange={handelChange}>
          </input>
)