import React, {Component} from 'react';
import { connect } from 'react-redux';

import './App.css';
import { gatherData } from './reducers';

// const mapStateToProps=state=>{
//   return {
//     data: state.gatherData.data,
//     isPending: state.gatherData.isPending,
//     error: state.gatherData.error
//   }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//     onRequest:()=> gatherData(dispatch)
//   }
// }

class App extends Component{
  componentDidMount(){
    // this.props.onRequest();
    console.log(this.props.store);
  }

  render(){
    return(
        <div className="App">
          <h1>hello</h1>
        </div>
    );
  }
}

export default App;