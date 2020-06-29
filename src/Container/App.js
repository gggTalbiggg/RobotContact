import React from 'react';
import CardCollecion from '../Component/CardCollecion';
import SearchBox from '../Component/SearchBox';
import Scroll from '../Component/Scroll';



class App extends React.Component{
	constructor(){
		super();
		this.state = {
			arrayRobots : [],
			searchField : ''
		}
	}
	onSearchChange = (event)=>{
		this.setState({searchField:event.target.value});
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(
			response=>{
				return response.json();
			}).then(
			users=>{
				this.setState({arrayRobots:users});
			});
		
	}
	render() {
		const filterRobot = this.state.arrayRobots.filter((user,i)=>{
			  return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return(
				  <div className="tc">
				      <h1>ROBO CONTACT </h1>
				      <SearchBox search = {this.onSearchChange}/>
				      <Scroll>
				          <CardCollecion robots={filterRobot} />
			          </Scroll>
			      </div>
              )
	}
}


export default App;