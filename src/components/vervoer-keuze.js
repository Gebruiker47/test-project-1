import { LitElement, html,css } from 'lit';

export class VervoerKeuze extends LitElement {

    static get properties() {
        return {
            reisVoorkeur: {type: Array},
            selectedVervoer: {type: String, reflect: true},
        }
    }
		
    constructor(){
        super();
        this.selectedVervoer = '',

        this.reisVoorkeur = [
            'Own car', 'Lease car', 'Trein', 'Bike', 'Sharing car', 
            'tram & metro', 'Taxi', 'Pool car', 'Lease bike'
        ]
    }
		
		static get observedAttributes() {
			return ['selectedVervoer']
		}

		attributeChangedCallback(attr, oldValue, newValue) {
			if(oldValue === newValue) return
			this[attr] = newValue
			// Om wijziging zichtbaar te maken gebruik je hier render()
      this.render()
		}

    render() {
        return html `                    
              <select @change="${this.selectedOption}">
								<option value="">Kies een vervoer</option>
								${this.reisVoorkeur.map((vervoer) => html `
										<option value="${vervoer}">${vervoer}</option>
									`)}
							</select>
            
							<p>${this.selectedVervoer}</p>
						`
    }

    selectedOption(e) {
        this.selectedVervoer = e.target.value;
        
    }

    static get styles() {
        return css `
            select {
                width: auto;
                padding: 10px 20px;
                margin: 8px 30px 8px 0px;
                box-sizing: border-box;
                font-size: 14pt;
                background: #cecece;
                float: left;
            }
        `
    }

}

window.customElements.define('vervoer-keuze', VervoerKeuze)
