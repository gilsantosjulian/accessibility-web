import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';
import { fetchMetadata } from '../../../actions/OntologyActions';
import { isEmpty } from '../../../functions/isEmpty';

class Footer extends Component {

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
			? this.props.fetchMetadata('footer')
			: null;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.footer) {
			this.setState({
				id: `${nextProps.footer["elements:id"]}`,
				class: `${nextProps.footer["elements:class"]}`,
				role: nextProps.footer["elements:role"],
			});
		}
	}

	render() {
		return (
			<footer
				className={this.state.class}
				id={this.state.id}
				role={this.state.role}
				tabIndex={this.props.tabIndex}
			>
				{this.props.children}
			</footer>
		);
	}
}

const mapStateToProps = state => ({
	ontology: state.ontologyReducer.ontology,
	footer: state.ontologyReducer.footer,
});

const mapDispatchToProps = dispatch => ({
	fetchMetadata: (id) => dispatch(fetchMetadata(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Footer);