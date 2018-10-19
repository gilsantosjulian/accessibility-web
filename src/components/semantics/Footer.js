import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMetadata } from '../../actions/OntologyActions';
import { isEmpty } from '../../functions/isEmpty';

class Footer extends Component {

	constructor(isRoot = false, checked = false) {
		super();
		this.state = {
			id: '',
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
				id: `${nextProps.footer.id[0]['_']}_id`,
				role: nextProps.footer.role[0]['_'],
			});
		}
	}

	render() {
		return (
			<footer
				className="Footer"
				id={this.state.id}
				role={this.state.role}
			>
				<p>
					This is a footer.

        		</p>
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