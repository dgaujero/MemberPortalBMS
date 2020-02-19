import React, { Component } from 'react';
import MemTrainer from '../components/CheckInComp/MemTrainer'
class CheckIn extends Component{
    constructor(props) {
        super(props);
        this.state={
            title: 'Check-In App',
            datas: []
        }
    }

    // componentWillMount(){
    //     this.refs.name.focus();
    // }

    // fSubmit = (event) =>  {
    //     event.preventDefault();

  
    // }

    render() {
        return(
            <div>
                <h2>{this.state.title}</h2>
                <form>
                    <input type='text' ref='username' placeholder='Enter your username'></input>
                    <input type='text' ref='password' placeholder='Enter your password'></input>
                    <button onClick={this.fSubmit} className='checkinBTN'>Check Me In!</button>
                    <MemTrainer></MemTrainer>
                </form>
            </div>
        )
    }
}

export default CheckIn