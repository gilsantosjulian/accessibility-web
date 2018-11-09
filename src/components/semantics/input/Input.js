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
            class: '',
            placeholder: '',
            type: '',
            name: '',
            value: '',
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
                id: nextProps.input["elements:id"],
                class: nextProps.input["elements:class"],
                placeholder: nextProps.input["placeholder"],
                type: nextProps.input["elements:type"],
                name: nextProps.input["elements:nameElement"],
                value: ''
            });
        }
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <label htmlFor='input' className='hidden' aria-hidden='false' >Digíta tu texto</label>
                <input
                    className={this.state.class}
                    id={this.state.id}
                    type={this.state.type}
                    name={this.state.name}
                    placeholder={this.state.placeholder}
                    value={this.state.value}
                    onChange={(event) => this.onChange(event)}
                />
            </React.Fragment>
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