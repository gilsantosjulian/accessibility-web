import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Img.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Img extends Component {

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.img) {
            this.setState({
                id: `${nextProps.img["elements:id"]}`,
                class: `${nextProps.img["elements:class"]}`,
                role: nextProps.img["elements:role"],
            });
        }
    }

    render() {
        !isEmpty(this.props.ontology)
            ? this.props.fetchMetadata('img')
            : null;
        return (
            <img
                className={this.state.class}
                id={this.state.id}
                // role={this.state.role}
                alt={this.props.alt}
                src={this.props.src}
            >
            </img>
        );
    }
}

const mapStateToProps = state => ({
    ontology: state.ontologyReducer.ontology,
    img: state.ontologyReducer.img,
});

const mapDispatchToProps = dispatch => ({
    fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Img);