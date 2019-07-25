import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return{
            background: 'grey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-throught': 'none'
        }
    }

    markComplete = ()=> {
    console.log(this.props);
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.markComplete.bind(this)}/> {' '}
                <p> {this.props.todo.title} </p>
            </div>
        )
    }
}
// proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem
