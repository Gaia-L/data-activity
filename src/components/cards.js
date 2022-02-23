import { Component } from "react";

//struttura delle cards. Ogni card del paziente è formato da un body contenente il nome 
//del paziente come titolo,  e i  dati personali (props del mainComponent).
class Cards extends Component {
    render() {
        return (
            <>
                <div className="col">
                    <br />
                    <div className="cardStyle">
                        <div className="card-body">
                            <h5 className="cardTitle">{this.props.card.name}</h5>
                            <hr />
                            <p className="card-text">
                                Gender: {this.props.card.gender}
                                <br />
                                BirthDate: {this.props.card.birthDate}
                                <br />
                                Height: {this.props.card.heightCm} Cm
                                <br />
                                Weight: {this.props.card.weightKg} Kg
                                <br />
                                Body max index: {this.props.card.bmi}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Cards;