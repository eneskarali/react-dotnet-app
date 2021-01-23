import React, { Component } from 'react';
import './style.css'
import { connect } from "react-redux";
import { getCourses } from '../../actions/courseAction'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getCourses());
    }

    renderTableData() {
        return this.props.courseService.courses.map((course, index) => {
            const { courseId, name, description } = course
            let toPath = '/course/'+courseId
            return (
                <tr key={courseId}>
                    <td>{courseId}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td><Link to={toPath} >Enter</Link></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="tableContent">
                    <h1 className="coursesHead" >Active Courses</h1>
                    <table className="coursesTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.courseService.courses.length > 0 && this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <Link to={"/create-course"}> <button className="fixedButton">Create New Course</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { courses } = state;
    return {
        courseService: courses
    }
}

export default connect(mapStateToProps)(Dashboard)