import React, { Component } from 'react'

//we render lists in here too
class Counter extends Component {
  state = {
    value: this.props.value,
    
  };

  //we create an event called handleIncrement to handle our increments
  handleIncrement =() =>{
    this.setState({value : this.state.value + 1});
  }

  render() {
  
    return (
      <div>
        {this.props.id}
        <span className={this.getBadgeClasses()}>{this.fornmatCount()}</span>
        <button onClick={this.handleIncrement} className='btn  btn-secondary btn-sm'>Add</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className='btn m-2 btn-danger btn-sm'>Remove</button>
      </div>
    );
}
       getBadgeClasses() {
          let classes = "badge m-2 badge-";
          classes += this.state.value === 0 ? 'warning' : 'primary';
          return classes;
      }
  

  fornmatCount() {
    const { value } = this.state;
    return value === 0 ? "empty" : value;
  }

}

export default Counter;