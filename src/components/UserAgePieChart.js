import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { connect } from 'react-redux'
import UserPieChart from "./UserPieChart"

class UserAgePieChart extends React.Component {

    render() {
        return (
            <div >
                <UserPieChart userData={this.props.userAgeData} title={this.props.userAgeData["age_group"]} />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAgeData: state.userAgeData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserAgePieChart)