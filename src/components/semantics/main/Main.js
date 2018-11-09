import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Main extends Component {

    constructor(isRoot = false, checked = false) {
        super();
        this.state = {
            id: '',
            class: '',
            role: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('main')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.main) {
            this.setState({
                id: `${nextProps.main["elements:id"]}`,
                class: `${nextProps.main["elements:class"]}`,
                role: nextProps.main["elements:role"],
            });
        }
    }

    render() {
        return (
            <main
                className={this.state.class}
                id={this.state.id}
                // role={this.state.role}
            >
                {this.props.children}
            </main>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    main: state.ontologyReducer.main,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);