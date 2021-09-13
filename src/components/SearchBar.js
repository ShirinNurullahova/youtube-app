import React from 'react';

const SearchBar =({handleFormSubmit})=>{
    const[searchTerm ,setSearchterm]= React.useState('');


    return(
        <div className='searchbar'>
          <form onSubmit={(e)=>{
              e.preventDefault();
              handleFormSubmit(searchTerm)
          }}>
              <p>Search for <span>Youtube</span> videos</p>
              <input onChange={(e)=>setSearchterm(e.target.value)} 
               type='text' 
               value={searchTerm}
           />
          </form>
        </div>
    )
}
export default SearchBar;