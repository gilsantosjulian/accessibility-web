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
                id: `${nextProps.header.id[0]['_']}_id`,
                role: nextProps.header.role[0]['_'],
            });
        }
    }

    render() {
        return (
            <header
                className="header"
                id={this.state.id}
                role={this.state.role}
            >
                <h1>Encabezado</h1>
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