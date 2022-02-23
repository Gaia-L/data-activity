import React, { Component } from "react";
import { BiSortAlt2 } from 'react-icons/bi';
import ReactToExcel from 'react-html-table-to-excel';

//Tabella con campo di input per filtraggio dei dati.
//La funzione richiamata tramite l'attributo onChange passa al mainComponent il/i carattere/i inserito/i,
//all'interno del quale sono usati nella funzione callbackFunction per filtrare la colonna dei nomi e restituire solo 
//il paziente ricercato. Ogni colonna può essere ordinata attraverso la funzione change assegnata all'icona.
//I dati sono inseriti scorrendo la lista passata dal MainComponent tramite la props dato.
//Ho usato il modulo ReactToExcel per esportare i risultati della tabella.  
class DataTable extends Component {
  render() {
    return (
      <>
     <input type="text" id="myInput" onChange={event => {this.props.parentCallback(event.target.value)}} placeholder="Search for patient..." title="Type in a name" ></input>
        <table id="tableOne">
          <thead>
            <tr>
              <th>Id < BiSortAlt2 className="icons" onClick={this.props.changeOrderId}/></th>
              <th>Patient < BiSortAlt2 className="icons" onClick={this.props.changeOrdeName}/></th>
              <th>Sleeping < BiSortAlt2 className="icons" onClick={this.props.changeOrderSleeping}/></th>
              <th>Stationary awake < BiSortAlt2 className="icons" onClick={this.props.changeOrderStAwake}/></th>
              <th>Walking < BiSortAlt2 className="icons" onClick={this.props.changeOrderWalking}/></th>
              <th>Cycling < BiSortAlt2 className="icons" onClick={this.props.changeOrderCycling}/></th>
              <th>Swimming < BiSortAlt2 className="icons" onClick={this.props.changeOrderSwimming}/></th>
              <th>Running < BiSortAlt2 className="icons" onClick={this.props.changeOrderRunning}/></th>
              <th>Status < BiSortAlt2 className="icons" onClick={this.props.changeOrderStato}/></th>
            </tr>
          </thead>
          <tbody>
            {this.props.dato.map(listaPat =>
              <tr className='active-row'
                key={listaPat.id}
              >
                <td>{listaPat.id}</td>
                <td>{listaPat.name}</td>
                <td>{listaPat.sleeping == null ? '0' : listaPat.sleeping}</td>
                <td>{listaPat.stationaryawake}</td>
                <td>{listaPat.walking == null ? '0' : listaPat.walking}</td>
                <td>{listaPat.cycling == null ? '0' : listaPat.cycling}</td>
                <td>{listaPat.swimming == null ? '0' : listaPat.swimming}</td>
                <td>{listaPat.running == null ? '0' : listaPat.running}</td>
                <td style={{ color: listaPat.stato === 'Active Patient' ? '#008b02' : '#b80000' }}> {listaPat.stato}</td>
              </tr>

            )}
          </tbody>
        </table>
        <ReactToExcel
          className="buttonExport"
          table="tableOne"
          filename="Patient Data"
          sheet="sheet 1"
          buttonText="Export Data" />

      </>
    );
  }
}
export default DataTable;