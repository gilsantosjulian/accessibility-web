import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            role: '',
            aria_labelledby: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('form')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.form) {
            this.setState({
                id: `${nextProps.form.id[0]['_']}_id`,
                role: nextProps.form.role[0]['_'],
                aria_labelledby: nextProps.form.aria_labelledby[0]['_'],
            });
        }
    }

    render() {
        return (
            <form
                className="form"
                id={this.state.id}
                role={this.props.role}
                aria-labelledby=""
            >
                {this.props.children}
            </form>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    form: state.ontologyReducer.form,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);