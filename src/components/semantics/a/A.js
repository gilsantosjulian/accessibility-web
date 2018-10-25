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
            class: '',
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
                id: nextProps.a["elements:id"],
                class: nextProps.a["elements:class"],
                rel: nextProps.a["elements:rel"],
            });
        }
    }

    render() {
        return (
            <a
                className={this.state.class}
                id={this.state.id}
                key={`${this.state.id}_${this.props.title}`}
                role={this.props.role}
                rel={this.state.rel}
                href={this.props.href}
                title={this.props.title}
                tabIndex={this.props.tabIndex}
            >
                {this.props.text}
                {this.props.children}
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