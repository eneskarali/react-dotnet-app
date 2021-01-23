import React, { Component } from 'react';
import './style.css'
import { connect } from "react-redux";
import { putAssigment } from '../../actions/assigmentAction'
import { Redirect } from 'react-router-dom'

class CreateCoursePage extends Component {
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createSubmit = () => {
        const { dispatch } = this.props
        var courseId = this.props.match.params.id;
        dispatch(putAssigment(this.state.title, this.state.description, courseId))
    }

    render() {
        if (this.props.assigment.isPut) {
            return (<Redirect to={'/course/'+this.props.match.params.id} />)
        }
        else {
            return (

                <div className="page">
                    <h1>Create A New Assigment</h1>
                    <div className="formContainer">
                        <div>
                            <label for="fname">Title</label>
                            <input type="text" name="title" onChange={this.handleChange} />
                            <label for="lname">Description</label>
                            <input type="text" name="description" onChange={this.handleChange} />
                            <br />
                            <button className="submitButton" onClick={this.createSubmit} >Create</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    const { assigments } = state;
    return {
        assigment: assigments
    }
}

export default connect(mapStateToProps)(CreateCoursePage)