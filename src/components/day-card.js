import { LitElement, html, css } from "lit";

export class DayCard extends LitElement {
    
    static get properties(){
        return {
            day: {type: String},
            travel_type: {type: String},
            km_distance: { type: String }
        }
    }

    constructor() {
        super()
        this.day = 'Dag'
        this.travel_type = 'Vervoer'
        this.km_distance = '100'
    }

    render() {
        return html `
            <slot></slot>
            <h3>${this.day}</h3>
            <p>${this.travel_type}</p>
            <p>${this.km_distance}</p>
        `
    }

    static get styles() {
        return css `
            h3 {color: red;}    
            p {color: blue;}
        `
    }
}
customElements.define('day-card', DayCard)
