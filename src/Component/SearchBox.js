import React from 'react';


const SearchBox = (props)=>{
		return ( 
			     <div className = "pa2">
			          <input 
			          className="pa3 ba b--green bg-lightest-blue"
			          type="search" 
			          placeholder="Search for robot" 
			          onChange ={props.search}/>
			     </div>
			)
}
export default SearchBox;