import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Input.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Input extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('input')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.input) {
            this.setState({
                id: `${nextProps.input.id[0]['_']}_id`,
            });
        }
    }

    render() {
        return (
            <input
                className="input"
                id={this.state.id}
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
            >
            </input>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    input: state.ontologyReducer.input,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Input);