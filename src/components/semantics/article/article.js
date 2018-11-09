import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Article.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Article extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            role: '',
        };
    }

    componentWillUpdate(nextProps, nextState) {
        !isEmpty(nextProps.ontology)
            ? this.props.fetchMetadata('article')
            : null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.article) {
            this.setState({
                id: nextProps.article["elements:id"],
                class: nextProps.article["elements:class"],
                role: nextProps.article["elements:role"],
            });
        }
    }

    render() {
        return (
            <article
                className={this.state.class}
                id={`${this.state.id}_${this.props.ind}`}
                // role={this.state.role}
                tabIndex={this.props.tabIndex}
            >
                {this.props.children}
            </article>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    article: state.ontologyReducer.article,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Article);