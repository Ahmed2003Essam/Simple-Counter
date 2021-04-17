import React from 'react';


class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }  
increase = () =>{
this.setState({
    count : this.state.count + 1
})

};
Deacrease = () =>{
    this.setState({
        count : this.state.count - 1
    })  
};
    render(){
        return(
          <div>
             <h2>This is the count: {this.state.count}</h2>
             <button className="buttons-increase-dearcrease" onClick= {this.increase}>+</button>
             <button className="buttons-increase-dearcrease" onClick= {this.Deacrease}>-</button>
          </div>
        );
    }
  }
export default Counter;
