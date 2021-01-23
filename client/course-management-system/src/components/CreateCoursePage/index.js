import React, { Component } from 'react';
import './style.css'
import { connect } from "react-redux";
import { putCourse } from '../../actions/courseAction'
import { Redirect } from 'react-router-dom'

class CreateCoursePage extends Component {
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createSubmit = () => {
        const { dispatch } = this.props
        dispatch(putCourse(this.state.courseName, this.state.courseDescription))
    }

    render() {
        if (this.props.course.isPut) {
            return (<Redirect to='/' />)
        }
        else {
            return (

                <div className="page">
                    <h1>Create A New Course</h1>
                    <div className="formContainer">
                        <div>
                            <label for="fname">Name</label>
                            <input type="text" name="courseName" onChange={this.handleChange} />
                            <label for="lname">Description</label>
                            <input type="text" name="courseDescription" onChange={this.handleChange} />
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
    const { courses } = state;
    return {
        course: courses
    }
}

export default connect(mapStateToProps)(CreateCoursePage)