import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Form.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Form extends Component {

	constructor() {
		super();
		this.state = {
			id: '',
			class: '',
			role: '',
			aria_labelledby: '',
		};
	}

	componentWillUpdate(nextProps, nextState) {
		!isEmpty(nextProps.ontology)
			? this.props.fetchMetadata('form')
			: null;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.form) {
			this.setState({
				id: nextProps.form["elements:id"],
				class: nextProps.form["elements:class"],
				role: nextProps.form["elements:role"],
				aria_labelledby: nextProps.form["elements:aria-labelledby"],
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<label id={this.state.aria_labelledby} className='hidden' htmlFor="form" aria-hidden='true'>Formulario de búesqueda</label>
				<form
					className={this.state.class}
					id={this.state.id}
					role={this.state.role}
					aria-labelledby={this.state.aria_labelledby}
				>
					{this.props.children}
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	ontology: state.ontologyReducer.ontology,
	form: state.ontologyReducer.form,
});

const mapDispatchToProps = dispatch => ({
	fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Form);