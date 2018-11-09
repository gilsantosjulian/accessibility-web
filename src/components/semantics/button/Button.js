import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Button.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Button extends Component {

	constructor() {
		super();
		this.state = {
			id: '',
			class: '',
			placeholder: '',
			type: '',
			aria_describedby: '',
		};
	}

	componentWillUpdate(nextProps, nextState) {
		!isEmpty(nextProps.ontology)
			? this.props.fetchMetadata('button')
			: null;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.button) {
			this.setState({
				id: `${nextProps.button["elements:id"]}`,
				class: `${nextProps.button["elements:class"]}`,
				placeholder: nextProps.button["elements:placeholder"],
				type: nextProps.button["elements:type"],
				aria_describedby: nextProps.button["aria-describedby"],
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				<label id={this.state.aria_labelledby} className='hidden' htmlFor="button" aria-hidden='true'>Botón para buscar</label>
				<input
					className={this.state.class}
					id={this.state.id}
					type={this.state.type}
					aria_describedby={this.state.aria_describedby}
					value={this.props.value}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	ontology: state.ontologyReducer.ontology,
	button: state.ontologyReducer.button,
});

const mapDispatchToProps = dispatch => ({
	fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Button);