import stylesScss from './login-componentStyle';
import { LitElement, html } from "lit-element";
import { renderPage } from "./main.js";

export class Login extends LitElement {
  constructor() {
    super();
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }

  connectedCallback() {
    super.connectedCallback();
    // Verifica si el usuario está autenticado (puedes usar localStorage, cookies, o una API de autenticación).
    // Ejemplo: En este caso, estoy usando localStorage para almacenar un valor de autenticación.
    this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (this.isLoggedIn) {
      // Si el usuario ya está autenticado, redirige a "index".
      renderPage("index");
    }
  }

  loginUser() {
    if (this.username && this.password) {
      if (this.password.length >= 6) {
        // Lógica para autenticar al usuario. Puedes validar el usuario y contraseña aquí.
        // Ejemplo: Si la autenticación es exitosa, establece el estado de autenticación y redirige.
        this.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", "true"); // Almacena el estado de autenticación en localStorage.
        renderPage("index");
      } else {
        alert('La contraseña debe tener al menos 6 caracteres.');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`
      <div class="container">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>LOGIN</h2>
          <input type="text" placeholder="username" .value="${this.username}" @input="${(e) => this.username = e.target.value}">
          <input type="password" placeholder="password" .value="${this.password}" @input="${(e) => this.password = e.target.value}">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="rememberPassword">
            <label class="form-check-label" for="rememberPassword">Recordar</label>
          </div>
          <button class="login-button" @click="${this.loginUser}">Login</button>
          ${this.isLoggedIn
            ? html`<button class="return-button" @click="${() => renderPage('index')}">Volver al inicio</button>`
            : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('login-component', Login);
