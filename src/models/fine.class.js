import { FINE_STATE } from "./fineState.enum";

export class Fine {

    number = "";
    date = "";
    licensePlate = ""
    departament = "";
    infringement = "";
    state = FINE_STATE.PENDING;
    value = "";
    interest = "";
    finalValue = "";

    constructor(number, date, licensePlate, departament, infringement, state, value, interest) {
        this.number = number;
        this.date = date;
        this.licensePlate = licensePlate;
        this.departament = departament;
        this.infringement = infringement
        this.state = state
        this.value = value
        this.interest = interest
        this.finalValue = value + (interest * value / 100)
    }

}