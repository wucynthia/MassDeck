import React, { Component, PropTypes } from 'react';
  
import { Tasks } from '../api/tasks.js';
 
// Task component - represents a single todo item
export default class Task extends Component {
toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {$set: {checked:!this.props.task.checked }});
  }
    
Upvote() {
    //adds an upvote
    Tasks.update(this.props.task._id, {$inc: {upvotes: 1}})
}    
    
Downvote() {
    //adds an upvote
    Tasks.update(this.props.task._id, {$inc: {upvotes: -1}})
}    
 
  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }
 
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? 'checked' : '';
      
    return (
       <li className={taskClassName}>
            <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
 
        <input
        classname = "upvote"
          type="button"
          readOnly
          //checked={this.props.task.checked}
          //onClick={this.toggleChecked.bind(this)}
          onClick = {this.Upvote.bind(this)}
        />
        
        <input
        className = "upvote"
          type="button"
          readOnly
          //checked={this.props.task.checked}
          //onClick={this.toggleChecked.bind(this)}
          onClick = {this.Downvote.bind(this)}
        />
 
        <span className="upvotes">{this.props.task.upvotes}</span>
        
        <span className="text">{this.props.task.text}</span>
        
        
      </li>
    );
  }
}
