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
                id: `${nextProps.li.id[0]['_']}_id`,
                role: nextProps.li.role[0]['_'],
                aria_haspopup: nextProps.li.aria_haspopup[0]['_'],
                aria_hidden: nextProps.li.aria_hidden[0]['_'],
            });
        }
    }

    render() {
        return (
            <li
                className="li"
                id={this.state.id}
                role={this.state.role}
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