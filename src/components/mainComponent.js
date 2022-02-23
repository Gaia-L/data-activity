import { Component } from "react";
import patients from '../res/mock-api-data/patients.json';
import DataTable from "./dataTable";
import PanelCards from "./panelCards";

// Componente padre con props quali:
//- patients : lista pazienti contenuta nel mock-api-data/patients.json';
//- un boolean per la gestione dei sort
//- una string per filtrare la tabella
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients,
      control: true,
      datoInput: ""
    }
  }

  //costruisco il componente 
  componentDidMount() {
    var status1 = "";
    const nuovaLista = [...this.state.patients]
    //ciclo per cercare le attività di ciascun paziente sui summary.json
    for (var i = 0; i < nuovaLista.length; i++) {
      const newList = nuovaLista[i]
      const id = newList.id
      const objectPath = require("../res/mock-api-data/patients/" + id + "/summary.json");
      for (var a = 0; a < objectPath.length; a++) {
        //aggiungo alla lista dei pazienti la propria attività con il relativo tempo 
        nuovaLista[i][objectPath[a].activity.replace("-", "")] = objectPath[a].minutes;
      }
    }
    // ciclo per definire la soglia dell'attività del paziente che determina se il paziente
    //è attivo o passivo.
    for (var c = 0; c < nuovaLista.length; c++) {
      const wal = nuovaLista[c].walking;
      const cycl = nuovaLista[c].cycling;
      const swim = nuovaLista[c].swimming;
      const run = nuovaLista[c].running;

      if (wal >= 150 || cycl >= 150 || wal + cycl >= 150) {
        status1 = "Active Patient"
      }
      else if (swim >= 75 || run >= 75 || swim + run >= 75) {
        status1 = "Active Patient"
      }
      else if ((swim >= 25 || run >= 25 || swim + run >= 25) && (wal >= 100 || cycl >= 100 || wal + cycl >= 100)) {
        status1 = "Active Patient"
      }
      else { status1 = "Passive Patient" }
      nuovaLista[c]["stato"] = status1;
      //filtro la lista dei pazienti in base all'età , selezionando solo coloro che hanno 
      //un'età compresa tra i 20 e i 40 anni
      const newList2 = nuovaLista.filter(pat => pat.birthDate >= "1982-01-01" && pat.birthDate <= "2002-12-31");
      //setto il risultato ottenuto sulla lista pazienti, ovvero quella che sarà mostrata
      this.setState({ patients: newList2 })
    }
  }

  //metodo per ordine colonna id
  orderId = () => {
    const listID = [...this.state.patients]
    if (this.state.control) {
      listID.sort((a, b) => a.id > b.id ? 1 : -1)
      this.setState({ control: false })
    } else {
      listID.sort((a, b) => a.id < b.id ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listID })
  }
  //metodo per ordine alfabetico colonna name
  orderName = () => {
    const listName = [...this.state.patients]
    //sort sul nome generale a-z
    if (this.state.control) {
      listName.sort(
        (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
      this.setState({ control: false })
    } else {
      listName.sort(
        (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listName })
  }

  //metodo per ordine numerico colonna sleeping
  ordersleeping = () => {
    const listSleeping = [...this.state.patients]
    if (this.state.control) {
      listSleeping.sort((a, b) => a.sleeping > b.sleeping ? 1 : -1)
      this.setState({ control: false })
    } else {
      listSleeping.sort((a, b) => a.sleeping < b.sleeping ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listSleeping })
  }
  //metodo per ordine numerico colonna Stationary awake
  orderStAwake = () => {
    const listStAwake = [...this.state.patients]
    if (this.state.control) {
      listStAwake.sort((a, b) => a.stationaryawake > b.stationaryawake ? 1 : -1)
      this.setState({ control: false })
    } else {
      listStAwake.sort((a, b) => a.stationaryawake < b.stationaryawake ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listStAwake })
  }

  //metodo per ordine numerico colonna walking
  orderWalking = () => {
    const listWalking = [...this.state.patients]
    if (this.state.control) {
      listWalking.sort((a, b) => (a.walking == null ? 0 : a.walking) > (b.walking == null ? 0 : b.walking) ? 1 : -1)
      this.setState({ control: false })
    } else {
      listWalking.sort((a, b) => (a.walking == null ? 0 : a.walking) < (b.walking == null ? 0 : b.walking) ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listWalking })
  }

  //metodo per ordine numerico colonna cycling
  orderCycling = () => {
    const listCycling = [...this.state.patients]
    if (this.state.control) {
      listCycling.sort((a, b) => (a.cycling == null ? 0 : a.cycling) > (b.cycling == null ? 0 : b.cycling) ? 1 : -1)
      this.setState({ control: false })
    } else {
      listCycling.sort((a, b) => (a.cycling == null ? 0 : a.cycling) < (b.cycling == null ? 0 : b.cycling) ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listCycling })
  }

  //metodo per ordine numerico colonna Swimming
  orderSwimming = () => {
    const listSwimming = [...this.state.patients]
    if (this.state.control) {
      listSwimming.sort((a, b) => (a.swimming == null ? 0 : a.swimming) > (b.swimming == null ? 0 : b.swimming) ? 1 : -1)
      this.setState({ control: false })
    } else {
      listSwimming.sort((a, b) => (a.swimming == null ? 0 : a.swimming) < (b.swimming == null ? 0 : b.swimming) ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listSwimming })
  }

  //metodo per ordine numerico colonna Running
  orderRunning = () => {
    const listRunning = [...this.state.patients]
    if (this.state.control) {
      listRunning.sort((a, b) => (a.running == null ? 0 : a.running) > (b.running == null ? 0 : b.running) ? 1 : -1)
      this.setState({ control: false })
    } else {
      listRunning.sort((a, b) => (a.running == null ? 0 : a.running) < (b.running == null ? 0 : b.running) ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listRunning })
  }

  //metodo per ordine numerico colonna status
  orderStato = () => {
    const listStato = [...this.state.patients]
    //sort sul nome generale a-z
    if (this.state.control) {
      listStato.sort(
        (a, b) => a.stato.toLowerCase() > b.stato.toLowerCase() ? 1 : -1)
      this.setState({ control: false })
    } else {
      listStato.sort(
        (a, b) => a.stato.toLowerCase() < b.stato.toLowerCase() ? 1 : -1)
      this.setState({ control: true })
    } this.setState({ patients: listStato })
  }
  //funzione per ricevere da parte del componente figlio il dato inserito e usarlo
  //per filtrare la lista dei pazienti. 
  callbackFunction = (childData) => {
    this.setState({ datoInput: childData })
    const lista2 = patients.filter(pa => (pa.name.toLowerCase().includes(childData.toLowerCase())) && (pa.birthDate >= "1982-01-01" && pa.birthDate <= "2002-12-31"))
    this.setState({ patients: lista2 })
  }

  render() {
    return (
      <>
        <PanelCards dato={this.state.patients} />
        <DataTable dato={this.state.patients}
          changeOrderId={this.orderId}
          changeOrdeName={this.orderName}
          changeOrderSleeping={this.ordersleeping}
          changeOrderStAwake={this.orderStAwake}
          changeOrderWalking={this.orderWalking}
          changeOrderCycling={this.orderCycling}
          changeOrderSwimming={this.orderSwimming}
          changeOrderRunning={this.orderRunning}
          changeOrderStato={this.orderStato}
          parentCallback={this.callbackFunction}
        />
      </>
    )
  }
}
export default MainComponent;