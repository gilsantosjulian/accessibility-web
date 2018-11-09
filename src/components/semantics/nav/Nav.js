import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Nav extends Component {

    constructor(isRoot = false, checked = false) {
        super();
        this.state = {
            id: '',
            class: '',
            role: '',
            aria_label: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('nav')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.nav) {
            this.setState({
                id: nextProps.nav["elements:id"],
                class: nextProps.nav["elements:class"],
                aria_label: nextProps.nav["aria-label"],
                role: nextProps.nav["elements:role"],
            });
        }
    }

    render() {
        return (
            <nav
                className={this.state.class}
                id={this.state.id}
                // role={this.state.role}
                aria-label={this.state.aria_label}
                tabIndex={this.props.tabIndex}
            >
                {this.props.children}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    nav: state.ontologyReducer.nav,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Nav);