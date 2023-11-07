import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

export class LoginPage extends LitElement {
  static get properties() {
    return {
      lang: { type: String },
      selectedRole: { type: String },
      email: { type: String },
      password: { type: String }
    };
  }

  constructor() {
    super();
    this.lang = 'nl';
    this.selectedRole = 'gebruiker';
  }

  selectboxTemplate() {
    return html `
      <select .value='${this.selectedRole}' @change=${(e) => this.selectedRole = e.target.value}>
        <option value="gebruiker">Gebruiker</option>
        <option value="admin">Admin</option>
      </select>
    `
  }

  languageBtnTemplate() {
    return html `
      <button class="lang-button" data-lang="nl">Nederlands</button>
      <button class="lang-button" data-lang="en">English</button>
    `
  }
  inputTextTemplate() {
    return html `
      <input type="text" @input=${(e) => this.email = e.target.value} placeholder="Gebruikersnaam">
      <input type="password" @input=${(e) => this.password = e.target.value} placeholder="Wachtwoord">
    `
  }

  render() {
    return html`
      <kpn-header>
        ${this.selectboxTemplate()}
        ${this.languageBtnTemplate()}
        ${this.inputTextTemplate()}
        <button @click=${this.handleLogin}>Inloggen</button>
      </kpn-header>
    `;
  }

  static get styles() {
    return css`
      .grid-container {
        display: grid;
        height: 75vh;
        place-content: center;
        gap: 20px;
        text-align: center;
      }
      
      a {
        color: #fff;
        text-decoration: none;
        border: 2px solid #fff;
        border-radius: 20px;
        padding: 5px 40px;
      }
    `;
  }
}

window.customElements.define('login-page', LoginPage);
