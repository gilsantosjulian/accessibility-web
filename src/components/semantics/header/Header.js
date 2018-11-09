import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            class: '',
            role: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('header')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.header) {
            this.setState({
                id: `${nextProps.header["elements:id"]}`,
                class: `${nextProps.header["elements:class"]}`,
                role: nextProps.header["elements:role"],
            });
        }
    }

    render() {
        return (
            <header
                className={this.state.class}
                id={this.state.id}
                // role={this.state.role}
                tabIndex={this.props.tabIndex}
            >
                {this.props.children}
            </header>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    header: state.ontologyReducer.header,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);