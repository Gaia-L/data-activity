import React from 'react';
import { Accordion } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './cards';

//Componente funzionale formato da Componente Cards per mostrare dati pazienti. 
function PanelCards(props) {

    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Click on the arrow to view the patient files</Accordion.Header>
                    <Accordion.Body>
                        <h1>Dati dei Pazienti</h1>
                        <div className='row'>
                            {props.dato.map(card =>
                                <Cards
                                    key={card.id}
                                    card={card}
                                >
                                </Cards>
                            )}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
} export default PanelCards;