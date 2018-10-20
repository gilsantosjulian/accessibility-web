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
                id: `${nextProps.main.id[0]['_']}_id`,
                role: nextProps.main.role[0]['_'],
            });
        }
    }

    render() {
        return (
            <main
                className="main"
                id={this.state.id}
                role={this.state.role}
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