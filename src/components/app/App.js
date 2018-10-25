import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import DocumentTitle from 'react-document-title';
import A from '../semantics/a/A';
import Article from '../semantics/article/Article';
import Aside from '../semantics/aside/Aside';
import Button from '../semantics/button/Button';
import Footer from '../semantics/footer/Footer';
import Form from '../semantics/form/Form';
import Header from '../semantics/header/Header';
import Input from '../semantics/input/Input';
import Img from '../semantics/img/Img';
import Li from '../semantics/li/Li';
import Main from '../semantics/main/Main';
import Nav from '../semantics/nav/Nav';
import Ul from '../semantics/ul/Ul';

import { connect } from 'react-redux';
import { fetchOntology } from '../../actions/OntologyActions';

import img from '../../../public/img/razones_uso_tecnologia_accesible_small.gif';
var alternative_text = `
                Por entorno laboral:
                  4% con discapacidad severa.
                  3% con discapacidad moderada
									6% sin discapacidad
									
                Por razones de salud:
                  14% con discapacidad severa.
                  4% con discapacidad moderada
									3% sin discapacidad
									
                Por razones de comodidad de uso:
                  45% con discapacidad severa.
                  36% con discapacidad moderada
									31% sin discapacidad
									
                Por razones de conveniencia de uso:
                  55% con discapacidad severa.
                  58% con discapacidad moderada
									56% sin discapacidad

                Por razones de conveniencia de uso:
                  65% con discapacidad severa.
                  62% con discapacidad moderada
									58% sin discapacidad
								Fuente: The Wide range of habilities and its impact on computer Technology Forrester Research. 2003
                `;

class App extends Component {

	componentWillMount() {
		this.props.fetchOntology();
	}

	render() {
		return (
			<DocumentTitle title='Mi página Web accesible con metadatos semánticos'>
				<React.Fragment>
					<Header tabIndex="0">
						<div role="region">
							<h1>Accesibilidad Web para todos</h1>
						</div>
					</Header>
					{/* https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html */}
					<Nav>
						<Ul>
							<Li><A href='' rel='tab' text='Inicio' /></Li>
							<Li><A href='' rel='tab' text='Nuestro Equipo' /></Li>
							<Li><A href='' rel='tab' text='Servicios' /></Li>
							<Li><A href='' rel='tab' text='Contacto' /></Li>
						</Ul>
						<Form>
							<label htmlFor="input" aria-hidden='false' style={{ display: 'none' }}>Digíta tu texto</label>
							<Input />

							<label htmlFor="button" aria-hidden='true' style={{ display: 'none' }}>Botón para buscar</label>
							<Button value="Buscar" />
						</Form>
					</Nav>

					<Main>
						<Article>
							<section>
								<h2 style={{ textAlign: 'left' }}>Introducción </h2>
								<p>
									Esta idea nace de ver la necesidad por implementar estándares de Accesibilidad
                  Web para personas ciegas dentro del proceso de desarrollo de software, brindando
                  al programador y al diseñador Web, las pautas y herramientas necesarias para crear
                  un producto accesible con un valioso valor agregado.

                  Esta motivación nace al ver tan alta desinformación de accesibilidad Web en el mundo de
                  desarrollo de software. Por tal motivo, éste modelo hace posible llevar y mostrar
                  de manera amigable una nueva forma de integrar accesibilidad con herramientas moderdas de
                  desarrollo y Web semántica.
              </p>
								<h3>Personas con discapacidad visual</h3>
								<p>
									En Colombia, de las 41.242.948 personas descritas en el último censo, el 6.4% tienen alguna
                  discapacidad y el 2.77% tienen limitación para ver, en donde de este porcentaje solamente el
                  10% domina el sistema Braille y lamentablemente en jóvenes menores de 26 años, esta aproximación
                  baja el 5% (DANE, 2006). He aquí un problema de acceso a la información para personas ciegas.
              </p>
							</section>
						</Article>
						<Article>
							<section style={{ textAlign: 'center' }}>
								<h2>Razones de uso de la tecnología accesible</h2>
								<A
									href=''
									rel='link'
									title='Razones de uso de la tecnología accesible'
								>
									<Img
										src={img}
										alt={alternative_text}
										refresh={this.props.ontology}
									/>
									{/* <p style={{ margin: 0, paddingRight: 10, textAlign: 'right' }}>
                    <A href='#' rel='link' text='Más información' />
                  </p> */}
								</A>

								<div>
									<p style={{ textAlign: 'center', marginBottom: 0, }}>
										<strong>
											"El poder de la Web esta en su universalidad. Acceso por todos, independientemente
                      de la discapacidad, es un aspecto esencial."
                    </strong>
									</p>
									<p style={{ fontSize: '1.5rem', textAlign: 'right', fontFamily: 'italic' }}>
										Tim Berners Lee, W3C Director e inventor de la World Wide Web.
                  </p>
								</div>

							</section>
						</Article>
						<Aside>
							<h3 style={{ textAlign: 'center' }}>Temas Relacionados</h3>
							<Ul>
								<Li><A href='' rel='tab' text='La W3C y sus estándares' /></Li>
								<Li><A href='' rel='tab' text='Norma Técnica Colombiana (NTC)' /></Li>
								<Li><A href='' rel='tab' text='Herramientas de desarrollo Web accesibles' /></Li>
								<Li><A href='' rel='tab' text='NVDA Screen Reader' /></Li>
								<Li><A href='' rel='tab' text='Etiquetas HTML semánticas' /></Li>
							</Ul>
						</Aside>
					</Main>
					<Footer>
						<p style={{ textAlign: 'center' }}>
							@ Copyright 2018 por Julián Andrés Gil Santos.
        		</p>
					</Footer>
				</React.Fragment>
			</DocumentTitle>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ontology: state.ontologyReducer.ontology,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchOntology: () =>
			dispatch(fetchOntology()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);

