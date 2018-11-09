import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Li.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Li extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            class: '',
            role: '',
            aria_haspopup: '',
            aria_hidden: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('li')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.li) {
            this.setState({
                id: nextProps.li["elements:id"],
                class: nextProps.li["elements:class"],
                role: nextProps.li["elements:role"],
                aria_haspopup: nextProps.li["elements:aria-haspopup"][0]['_'],
                aria_hidden: nextProps.li["elements:aria-hidden"][0]['_'],
            });
        }
    }

    render() {
        return (
            <li
                className={this.state.class}
                id={`${this.state.id}_${this.props.children.props.ind}`}
                key={`${this.state.id}_${this.props.children.props.ind}`}
                // role={this.state.role}
                aria-haspopup={this.state.aria_haspopup}
                aria-hidden={this.state.aria_hidden}
            >
                {this.props.children}
            </li>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    li: state.ontologyReducer.li,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Li);