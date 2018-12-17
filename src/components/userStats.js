import React from 'react';
import { connect } from "react-redux";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import updateChildrenData from "../actions/updateChildrenData"
import updateAllCities from '../actions/updateAllCities'

class UserStats extends React.Component {

    componentDidMount() {

        if (this.props.allAgeGroups === "" && this.props.allCities === "" && this.props.childrenData === "") {
            console.log("j")
            adapter.getAgeGroups()
                .then(allAges => this.props.updateAllAgeGroups(allAges))

            adapter.getChildrenData()
                .then(childrenData => this.props.updateChildrenData(childrenData))

            adapter.getCityGroups()
                .then(allLocations => this.props.updateAllCities(allLocations))
        }
    }

    render() {
        return (
            <h1>logged in</h1>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStats)