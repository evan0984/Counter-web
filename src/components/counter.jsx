import React, {Component} from 'react';

class Counter extends Component{

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps" , prevProps);
        console.log("prevState" , prevState);

        if(prevProps.counter.value !== this.props.counter.value){
            console.log(this.props.counter.value);
        }
    }

    componentWillUnmount(){
        console.log("counter-unmount");
    } 

    render(){
          return(
            <div>
                {this.props.children}
                 <span className = {this.getBadgeClasses()}>{this.formatcount()}</span>
                 <button 
                    className = "btn btn-secondary btn-sm" 
                    onClick = {() => this.props.onIncrement(this.props.counter)}
                 >
                  Increment
                 </button>
                 <button 
                 onClick = {() => this.props.onDelete(this.props.counter.id)} 
                 className = 'btn btn-danger btn-sm m-2'
                 >
                 Delete
                 </button>
                 {/* <ul>
                     {this.state.tags.map(tag=><li key = {tag}>{tag}</li>)}
                 </ul> */}
            </div>
        )
    }

   

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : this.props.counter.value;
    }
    
}

export default Counter;

