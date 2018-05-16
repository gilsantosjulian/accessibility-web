import React, { Component } from 'react';
var XMLParser = require('react-xml-parser');
// fs = require('fs');
// var parser = require('xml2js');

//import fs from 'fs';
import xml2js from 'xml2js';

export default class Footer extends Component {
	render() {

		var xmlText = `
		<rdf:RDF 
			xmlns="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#" 
			xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
			xmlns:owl="http://www.w3.org/2002/07/owl#" 
			xmlns:xsd="http://www.w3.org/2001/XMLSchema#" 
			xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xml:base="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology" 
			xmlns:dc="http://purl.org/dc/elements/1.1/" 
			xmlns:element="https://www.w3schools.com/tags/">
			<owl:Ontology rdf:about="http://www.linkeddatatools.com/plants">
				<dc:title>HTML Ontology</dc:title>
				<dc:description>Ontología que define los elementos HTML como componentes Web</dc:description>
			</owl:Ontology>
			<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#id">
				<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#general"></rdfs:subPropertyOf>
			</owl:DatatypeProperty>
			<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#banner">
				<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#roles"></rdfs:subPropertyOf>
				<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"></rdfs:range>
			</owl:DatatypeProperty>
			<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#main">
				<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#roles"></rdfs:subPropertyOf>
				<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"></rdfs:range>
			</owl:DatatypeProperty>
			<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#contentinfo">
				<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#roles"></rdfs:subPropertyOf>
				<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"></rdfs:range>
			</owl:DatatypeProperty>
			<owl:DatatypeProperty rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#navigation">
				<rdfs:subPropertyOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#roles"></rdfs:subPropertyOf>
				<rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"></rdfs:range>
			</owl:DatatypeProperty>
			<owl:Class rdf:about="https://www.w3schools.com/tags/tag_header.asp">
				<rdfs:label>Encabezado</rdfs:label>
				<rdfs:comment>Representa el contenedor como contenido introductorio o como un conjunto de enlaces de navegación</rdfs:comment>
				<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#element"></rdfs:subClassOf>
			</owl:Class>
			<owl:Class rdf:about="https://www.w3schools.com/tags/tag_main.asp">
				<rdfs:label>Sección principal</rdfs:label>
				<rdfs:comment>La etiqueta main especifica el contenido principal de un documento</rdfs:comment>
				<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#element"></rdfs:subClassOf>
			</owl:Class>
			<owl:Class rdf:about="https://www.w3schools.com/tags/tag_footer.asp">
				<rdfs:label>Pie de página</rdfs:label>
				<rdfs:comment>Define el pie de página de un documento o una sección</rdfs:comment>
				<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#element"></rdfs:subClassOf>
			</owl:Class>
			<owl:Class rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Nav">
				<rdfs:label>Barra de navegación</rdfs:label>
				<rdfs:comment>Define el conjunto de enlaces de navegación</rdfs:comment>
				<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#element"></rdfs:subClassOf>
			</owl:Class>
			<owl:Class rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Li">
			<rdfs:label>Define un ítem de lista</rdfs:label>
				<rdfs:comment>Define el conjunto de enlaces de navegación</rdfs:comment>
				<rdfs:subClassOf rdf:resource="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Ul"></rdfs:subClassOf>
			</owl:Class>
			<owl:NamedIndividual rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Header">
				<role rdf:datatype="http://www.w3.org/2001/XMLSchema#string">banner</role>
				<id rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">header_id</id>
			</owl:NamedIndividual>
			<owl:NamedIndividual rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Main">
				<role rdf:datatype="http://www.w3.org/2001/XMLSchema#string">main</role>
				<id rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">main_id</id>
			</owl:NamedIndividual>
			<owl:NamedIndividual rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Footer">
				<role rdf:datatype="http://www.w3.org/2001/XMLSchema#string">contentinfo</role>
				<id rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">footer_id</id>
			</owl:NamedIndividual>
			<owl:NamedIndividual rdf:about="http://www.semanticweb.org/juli/ontologies/2018/2/html-ontology#Nav">
				<role rdf:datatype="http://www.w3.org/2001/XMLSchema#string">navigation</role>
				<id rdf:datatype="http://www.w3.org/2001/XMLSchema#string">navigation_id</id>
			</owl:NamedIndividual>
		</rdf:RDF>
    
    `

		// var parser = new xml2js.Parser();
		// fs.readFile(__dirname + './ontology.xml', 'utf8', function (err, data) {
		// 	if (!err) {
		// 		console.log(data);
		// 	}
		// });


		console.log(xmlText);
		var xml = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML
		console.log(xml);
		console.log(xml.getElementsByTagName('Name'));


		return (
			<div className="Footer">
				<p>
					This is a footer.
        </p>
			</div>
		);
	}
}