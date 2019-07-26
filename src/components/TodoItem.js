import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return{
            background: 'grey',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textDecoration: this.props.todo.completed ?
            'line-through': 'none'
        }
    }



    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                <p> {title} </p>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        )
    }
}
// proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer'
}


export default TodoItem
