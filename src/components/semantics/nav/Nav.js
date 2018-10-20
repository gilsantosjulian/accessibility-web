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
            role: '',
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
                id: `${nextProps.nav.id[0]['_']}_id`,
                role: nextProps.nav.role[0]['_'],
            });
        }
    }

    render() {
        return (
            <nav
                className="nav"
                id={this.state.id}
                role={this.state.role}
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