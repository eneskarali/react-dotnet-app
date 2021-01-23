import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCourse } from '../../actions/courseAction'
import { getAsssigmentsByCourseId } from '../../actions/assigmentAction'
import { Link } from 'react-router-dom';


class CoursePage extends Component {
    componentDidMount = () => {
        const { dispatch } = this.props;
        var courseId = this.props.match.params.id;
        dispatch(getAsssigmentsByCourseId(courseId));
        dispatch(getCourse(courseId));

    }

    renderTableData() {
        return this.props.assigment.assigments.map((assigment, index) => {
            const { assigmentId, title, description, creationDate, dueDate } = assigment
            return (
                <tr key={assigmentId}>
                    <td>{assigmentId}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{creationDate}</td>
                    <td>{dueDate}</td>
                </tr>
            )
        })
    }

    render() {
        if (this.props.assigment.assigments.length === 0) {
            return (
                <div className="page">
                    <h1>No data</h1>
                    <Link to={'/course/' + this.props.match.params.id + '/create-assigment'}> <button className="fixedButton">Create New Assigment</button></Link>
                </div>
            )
        }
        return (
            <div className="page">
                <h1 id="headCouseDet">{this.props.course.course.name}</h1>
                <h3 id="decsCouseDet" >{this.props.course.course.description}</h3>
                <div>
                    <table className="coursesTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Creation Date</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.assigment.assigments.length > 0 && this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <Link to={'/course/' + this.props.match.params.id + '/create-assigment'}> <button className="fixedButton">Create New Assigment</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { courses, assigments } = state;
    return {
        course: courses,
        assigment: assigments
    }
}

export default connect(mapStateToProps)(CoursePage)