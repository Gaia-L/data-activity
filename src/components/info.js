import { Alert, Button } from "react-bootstrap";
import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

//Componente funzionale utilizzato all'interno della Navbar per mostrare un pannello con 
//la legenda della tabella. Questo componente ha lo stato iniziale impostato a false,
//e nel momento in cui si clicca sul tasto con l'icona , lo stato viene settato a true 
//e mostra l'alert. 

function Info() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Alert show={show}>
                <hr />
                <Alert.Heading >Patients Cards</Alert.Heading>
                <hr />
                <p>
                    The table contains the activity time of patients aged 20 to 40 years.
                    The status of intense activity is calculated in relation to the following parameters:
                    - 150 minutes of moderate intensity activity, or
                    - 75 minutes of vigorous intensity activity, or
                    - a proportionate mix of both, e.g. 25 minutes of vigorous and 100 minutes of
                    moderate.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button className='buttonInfo' onClick={() => setShow(false)} >
                        Close legend
                    </Button>
                </div>
            </Alert>

            {!show && <Button className='buttonInfo' onClick={() => setShow(true)} ><BsInfoCircle /></Button>}
        </>
    )
} export default Info;