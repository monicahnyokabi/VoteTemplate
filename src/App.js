import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			Presidents : [
				{name: "Uhuru Kenyatta", votes: 0},
				{name: "Raila Odinga", votes: 0},
				{name: "William Ruto", votes: 0},
				{name: "Musalia Mudavadi", votes: 0}
			]
		}
	}

	vote (i) {
		let newPresidents = [...this.state.Presidents];
		newPresidents[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({Presidents: newPresidents});
		
	}

	render(){
		return(
			<>
				<h1>Vote Your President!</h1>
				<div className="presidents">
					{
						this.state.Presidents.map((presidents, i) => 
							<div key={i} className="presidents">
								<div className="voteCount">
									{presidents.votes}
								</div>
								<div className="presidentName">
									{presidents.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;