import { LitElement, html, css } from "lit";

export class AddDay extends LitElement {

  static get properties() {
    return {
      extraDays: { type: Array },
      travel_type : { type: String },
      km_distance : { type: Number }
    }
  }

  constructor() {
    super();
    this.extraDays = []
    this.travel_type = ''
    this.km_distance = ''
  }

  render(){
    return html ``
  }

  getTravelType(e) {
    this.travel_type = e.target.value
  }
  getKmDistance(e) {
    this.km_distance = e.target.value
  }
  
  addExtraDay() {
    if(this.travel_type && this.km_distance) {
      this.extraDays = [...this.extraDays, {
        travel_type :  this.travel_type,
        km_distance : this.km_distance
      }];
        this.travel_type = '',
        this.km_distance = ''
    }
  }

}
window.customElements.define('add-day', AddDay)
