import React from 'react';
import Card from './Card';



const CardCollecion = props => {
	const arrayList = props.robots.map((user,i)=>{
	return(<Card key = {user.id} name={user.name}  id={user.id}  email ={user.email} />)
     });
	return <div>{arrayList}</div>			     			
	
}
export default CardCollecion;