import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Ul.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Ul extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            class: '',
            role: '',
            aria_expanded: '',
            aria_hidden: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('ul')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ul) {
            this.setState({
                id: `${nextProps.ul["elements:id"]}`,
                class: `${nextProps.ul["elements:class"]}`,
                role: nextProps.ul["elements:role"],
                ariaLabel: nextProps.ul["aria-label"],
                aria_expanded: nextProps.ul["elements:aria-expanded"][0]['_'],
                aria_hidden: nextProps.ul["elements:aria-hidden"][0]['_'],
            });
        }
    }

    render() {
        return (
            <ul
                className={this.state.class}
                id={this.state.id}
                // role={this.state.role}
                aria-expanded={this.state.aria_expanded}
                aria-hidden={this.state.aria_hidden}
                aria-label={this.state.ariaLabel}
                tabIndex={this.props.tabIndex}
            >
                {this.props.children}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    ul: state.ontologyReducer.ul,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Ul);