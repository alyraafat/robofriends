import React from 'react';

const Searchbox = ({searchChange}) => {
    return(
        <input
        className='pa3 ba ba--green bg-lightest-blue' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
    )
}

export default Searchbox