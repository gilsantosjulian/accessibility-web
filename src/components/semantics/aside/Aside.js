import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Aside.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Aside extends Component {

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
            ? this.props.fetchMetadata('aside')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.aside) {
            this.setState({
                id: `${nextProps.aside["elements:id"]}`,
                class: `${nextProps.aside["elements:class"]}`,
                role: nextProps.aside["elements:role"],
            });
        }
    }

    render() {
        return (
            <aside
                className={this.state.class}
                id={this.state.id}
                role={this.state.role}
                tabIndex={this.props.tabIndex}
            >
                {this.props.children}
            </aside>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    aside: state.ontologyReducer.aside,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Aside);