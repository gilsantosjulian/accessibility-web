import React, { Component } from 'react';
var XMLParser = require('react-xml-parser');

var xmlText = './ontology.xml'

export default class Footer extends Component {
  render() {

    var xmlText = `
    <?xml version="1.0"?>
<rdf:RDF 
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
	xmlns:owl="http://www.w3.org/2002/07/owl#"
	xmlns:dc="http://purl.org/dc/elements/1.1/">
	
	
	<owl:Ontology rdf:about="http://www.linkeddatatools.com/plants">
		<dc:title>Art, Architecture and Tools Ontolology</dc:title>
		<dc:description>Ontologia que contiene elementos de arte, arquitectura y herramientas clasificados en un sistema de tres edades para dos periodos de la historia.
						Estos dos periodos son la edad de piedra y la edad de los metales.
						Para la edad de piedra se establecen las edades: Paleolítico, Mesolítico y Neolítica.
						Para la de los metales se establecen las edades: Cobre, bronce y hierro.
		</dc:description>
	</owl:Ontology>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Stone_age_period">
		<rdfs:label>Stone age period</rdfs:label>
		<rdfs:comment>Clase correspondiente a la edad de piedra.</rdfs:comment>
	</owl:Class>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Age_of_metals_period">
		<rdfs:label>Age of metals period</rdfs:label>
		<rdfs:comment>Clase correspondiente a la edad de los metales.</rdfs:comment>
	</owl:Class>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Paleolithic">
		<rdfs:subClassOf rdf:resource="www.aatontology.com/three-age-system#Stone_age_period"></rdfs:subClassOf>
		<rdfs:label>Paleolítico</rdfs:label>
		<rdfs:comment>Clase correspondiente al paleolítico, es una sub clase de la edad de piedra. (Stone Age period)</rdfs:comment>
	</owl:Class>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Mesolithic">
		<rdfs:subClassOf rdf:resource="www.aatontology.com/three-age-system#Stone_age_period"></rdfs:subClassOf>
		<rdfs:label>Mesolítico</rdfs:label>
		<rdfs:comment>Clase correspondiente al Mesolítico, es una sub clase de la edad de piedra. (Stone Age period)</rdfs:comment>
	</owl:Class>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Neolithic">
		<rdfs:subClassOf rdf:resource="www.aatontology.com/three-age-system#Stone_age_period"></rdfs:subClassOf>
		<rdfs:label>Neolítico</rdfs:label>
		<rdfs:comment>Clase correspondiente al Neolítico, es una sub clase de la edad de piedra. (Stone Age period)</rdfs:comment>
	</owl:Class>
	
	<!-- -->
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Copper_age">
		<rdfs:subClassOf rdf:resource="www.aatontology.com/three-age-system#Age_of_metals_period"/>
		<rdfs:label>Edad de cobre</rdf:label>
		<rdfs:comment>Clase correspondiente la edad de cobre, es una sub clase de la edad de los metales. (Age of metals)</rdfs:comment>
	</owl:Class>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Bronze_age">
		<rdfs:subClassOf rdf:resource="www.aatontology.com/three-age-system#Age_of_metals_period"/>
		<rdfs:label>Edad de bronce</rdf:label>
		<rdfs:comment>Clase correspondiente la edad de bronce, es una sub clase de la edad de los metales. (Age of metals)</rdfs:comment>
	</owl:Class>
	
	<owl:Class rdf:about="www.aatontology.com/three-age-system#Iron_age">
		<rdfs:subClassOf rdf:resource="www.aatontology.com/three-age-system#Age_of_metals_period"/>
		<rdfs:label>Edad de hierro</rdf:label>
		<rdfs:comment>Clase correspondiente la edad de hierro, es una sub clase de la edad de los metales. (Age of metals)</rdfs:comment>
	</owl:Class>
	
	<owl:DatatypeProperty rdf:about="www.aatontology.com/three-age-system#category"/>
	<owl:DatatypeProperty rdf:about="www.aatontology.com/three-age-system#DBpediaInfo"/>
	<owl:ObjectProperty rdf:about="www.aatontology.com/three-age-system#3DModel"/>	
	
	<!--Objetos individuales-->
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Venus_of_Berekhat_Ram">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Venus_of_Berekhat_Ram</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Lion-man">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Lion-man</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Bâton_de_commandement">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Bâton_de_commandement</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Venus_of_Tan-Tan">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Venus_of_Tan-Tan</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Cave">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Cave</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Cueva_de_las_Manos">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Cueva_de_las_Manos</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Hut">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Hut</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Tent">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Tent</three-age-system:DBpediaInfo>
	</rdf:Description>

	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Club_(weapon)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Club_(weapon)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Chopper_(archaeology)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Chopper_(archaeology)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Hand_axe">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Hand_axe</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Scraper_(archaeology)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Scraper_(archaeology)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Spear">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Spear</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Harpoon">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Harpoon</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Sewing_needle">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Sewing_needle</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Hammerstone">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Paleolithic"/>
		<three-age-system:category>paleolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Hammerstone</three-age-system:DBpediaInfo>
	</rdf:Description>

	<!---->
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Shigir_Idol">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Shigir_Idol</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Jōmon_pottery">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Jōmon_pottery</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Venus_of_Willendorf">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Venus_of_Willendorf</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Cave">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Cave</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Hut">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Hut</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Tent">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Tent</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Harpoon">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Harpoon</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Bow_and_arrow">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Bow_and_arrow</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Microlith">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Microlith</three-age-system:DBpediaInfo>
	</rdf:Description>
		
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Canoe">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Mesolithic"/>
		<three-age-system:category>mesolithic_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Canoe</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Westray_Wife">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Westray_Wife</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Seated_Woman_of_Çatalhöyük">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Seated_Woman_of_Çatalhöyük</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Folkton_Drums">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Folkton_Drums</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Carved_Stone_Balls">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Carved_Stone_Balls</three-age-system:DBpediaInfo>
	</rdf:Description>

	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Megalithic_Temples_of_Malta">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Megalithic_Temples_of_Malta</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Stonehenge">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Stonehenge</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Stonehenge">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Stonehenge</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Ħaġar_Qim">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Ħaġar_Qim</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Mnajdra">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Mnajdra</three-age-system:DBpediaInfo>
	</rdf:Description>

	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Chisel">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Chisel</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Hoe_(tool)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Hoe_(tool)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Plough">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Plough</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Yoke">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Yoke</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Sickle">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Sickle</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Loom">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Loom</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Quern-stone">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Neolithic"/>
		<three-age-system:category>neolithic-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Quern-stone</three-age-system:DBpediaInfo>
	</rdf:Description>

	<!-- -->
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Areni-1_shoe">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Areni-1_shoe</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Stollhof_Hoard">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Stollhof_Hoard</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Stirrup_spout_vessel">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Stirrup_spout_vessel</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Narmer_Palette">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Narmer_Palette</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Great_Sphinx_of_Giza">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Great_Sphinx_of_Giza</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Areni-1_cave_complex">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Areni-1_cave_complex</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Rujm_el-Hiri">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Rujm_el-Hiri</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Tholos_de_El_Romeral">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Tholos_de_El_Romeral</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Great_Pyramid_of_Giza">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Great_Pyramid_of_Giza</three-age-system:DBpediaInfo>
	</rdf:Description>
		
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Pyramid_of_Khafre">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Pyramid_of_Khafre</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Labrys">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Labrys</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Cylinder_seal">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Cylinder_seal</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Metzendorf-Woxdorf_head_burial">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Metzendorf-Woxdorf_head_burial</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Ljubljana_Marshes_Wheel">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Copper_age"/>
		<three-age-system:category>copper-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Ljubljana_Marshes_Wheel</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Nebra_sky_disk">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Nebra_sky_disk</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Ding_(vessel)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Ding_(vessel)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Tell_el-Yahudiyeh_Ware">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Tell_el-Yahudiyeh_Ware</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Mold_cape">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Mold_cape</three-age-system:DBpediaInfo>
	</rdf:Description>
		
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Mooghaun_North_Hoard">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Mooghaun_North_Hoard</three-age-system:DBpediaInfo>
	</rdf:Description>
			
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Uffington_White_Horse">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Uffington_White_Horse</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Casco_de_Leiro">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Casco_de_Leiro</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Bulla_(amulet)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Bulla_(amulet)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Oxborough_Dirk">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Oxborough_Dirk</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Gold_lunula">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Gold_lunula</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Sintra_Collar">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Sintra_Collar</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Trundholm_sun_chariot">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Trundholm_sun_chariot</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Dunaverney_flesh-hook">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Dunaverney_flesh-hook</three-age-system:DBpediaInfo>
	</rdf:Description>	
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Deir_el-Bahari">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Deir_el-Bahari</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Ziggurat_of_Ur">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Ziggurat_of_Ur</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Naviforme">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Naviforme</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Stone_circle">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Stone_circle</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Khopesh">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Khopesh</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Nebra_sky_disk">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Nebra_sky_disk</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Acinaces">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Acinaces</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Sword_of_Goujian">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Sword_of_Goujian</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Kusanagi">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Kusanagi</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Yetholm-type_shield">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Yetholm-type_shield</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Daensen_folding_chair">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Daensen_folding_chair</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Berlin_Gold_Hat">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Berlin_Gold_Hat</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Andiron">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Bronze_age"/>
		<three-age-system:category>bronze-age-age_weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Andiron</three-age-system:DBpediaInfo>
	</rdf:Description>
	

	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Vače_Situla">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Vače_Situla</three-age-system:DBpediaInfo>
	</rdf:Description>
		
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Dhvaja">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Dhvaja</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Great_Torc_from_Snettisham">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Great_Torc_from_Snettisham</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Braak_Bog_Figures">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Braak_Bog_Figures</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Mšecké_Žehrovice_Head">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Mšecké_Žehrovice_Head</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Rhyton">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-art</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Rhyton</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Bedolina_Map">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Bedolina_Map</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Pyramid_of_Menkaure">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Pyramid_of_Menkaure</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Treadwheel_crane">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Treadwheel_crane</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Roundhouse_(dwelling)">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-architecture</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Roundhouse_(dwelling)</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Situla">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Situla</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Egyptian_faience">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Egyptian_faience</three-age-system:DBpediaInfo>
	</rdf:Description>
	
		<rdf:Description rdf:about="www.aatontology.com/three-age-system#Chariot">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Chariot</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Iron_Age_sword">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Iron_Age_sword</three-age-system:DBpediaInfo>
	</rdf:Description>
	
	<rdf:Description rdf:about="www.aatontology.com/three-age-system#Negau_helmet">
		<rdf:type rdf:resource="www.aatontology.com/three-age-system#Iron_age"/>
		<three-age-system:category>iron-age-weapons_and_tools</three-age-system:category>
		<three-age-system:3DModel rdf:resource="http://localhost:8080/modelos3D/"/>
		<three-age-system:DBpediaInfo>Negau_helmet</three-age-system:DBpediaInfo>
	</rdf:Description>
	
</rdf:RDF>
    ` 
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