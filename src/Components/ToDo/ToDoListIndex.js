import React, { Component } from 'react';
import {Input, Alert} from 'reactstrap';

class ToDoListIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            input: ""
        }
        this.deleteTask = this.deleteTask.bind(this)
    }

    componentDidMount() {
        this.displayTasks();
    }


    addTask(e) {
        e.preventDefault();
        const newTask = document.getElementById("taskName");
        let list = this.state.tasks;
        list.push(newTask.value);
        this.setState({ tasks : list });
        this.setState({input : ""})
        console.log(this.state.tasks);
    }

    deleteTask(item){
        // e.preventDefault();
        let list = this.state.tasks;
        list = list.filter(task => task !== item);
        this.setState({ tasks: list})
        console.log(this.state.tasks)
    }

    displayTasks = () => {
        return(
        this.state.tasks.map(task => <Alert color="success"><input type="checkbox" onClick={() => this.deleteTask(task)}/>  {task}</Alert>))
    }

    render(){
        return (
            <div>
                <Input placeholder="add a task" id="taskName" value={this.state.input} onChange={event => this.setState({input : event.target.value})}/>
                <button style={{ marginTop: "15px", marginBottom: "15px"}} onClick={(e) => this.addTask(e) }>Add Task</button>
                <div>
                    {this.displayTasks()}
                </div>
            </div>
        )
    }
}

export default ToDoListIndex;