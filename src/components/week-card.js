import { LitElement, html, css} from "lit";

export class WeekCard extends LitElement {

    static get properties(){
        return {
            week_days: {type: Array},
        }
    }

    constructor(){
        super()
        this.week_days = [
            { day: 'maandag', km_distance:'120', travel_type: 'Auto' },
            { day: 'dinsdag', km_distance:'12', travel_type: 'Fiets' },
            { day: 'woensdag', km_distance:'20', travel_type: 'Metro' },
            { day: 'donderdag', km_distance:'20', travel_type: 'Bus' },
            { day: 'vrijdag', km_distance:'120', travel_type: 'Auto' },
        ]
    }

    render() {
        return html `
				<kpn-header title="KPN header component"></kpn-header>

				${
					this.week_days.map((days) => html `
						
						<div class="grid-card"> 
																
							<day-card 
								day="${days.day}"
								km_distance="${days.km_distance}"
								travel_type="${days.travel_type}"> 
							</day-card>
						
						</div>
					`)
				}

        `
    }

    static get styles() {
        return css `

        h3 {color: red;}
        .grid-card {
            display: grid;
            background-color: #fff;
            margin-top: 20px;
            padding: 0 20px 35px 20px;
            border-radius: 10px;
          }

        button {
            font-family: Google Sans,Roboto,Helvetica,Arial,sans-serif;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: .25px;
            padding: 11px 23px;
            vertical-align: revert;
            border-radius: 4px;
            box-sizing: border-box;
            cursor: pointer;
            background-color: #1a73e8;
            color: #fff;
            border: none;
        }

				.grid-card {
					width: 100%;
					border: 1px solid #fff;
					background: #f9fff7;
					box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
				}


        `
    }
}

customElements.define('week-card', WeekCard)
