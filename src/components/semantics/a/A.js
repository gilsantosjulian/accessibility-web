import React, { Component } from 'react';
import { connect } from 'react-redux';
import './A.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class A extends Component {

    constructor(title = '', rel = '', href = '', role = '') {
        super();
        this.state = {
            id: '',
            rel: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('a')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.a) {
            this.setState({
                id: `${nextProps.a.id[0]['_']}_id`,
                rel: nextProps.a.rel[0]['_'],
            });
        }
    }

    render() {
        return (
            <a
                className="a"
                id={this.state.id}
                role={this.props.role}
                rel={this.state.rel}
                href={this.props.href}
            >
                {this.props.title}
            </a>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    a: state.ontologyReducer.a,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(A);