import stylesScss from './registration-componentStyles';
import { LitElement, html } from "lit-element";
import { renderPage } from "./main.js";

export class Registration extends LitElement {
  constructor() {
    super();
    this.userData = {
      name: '',
      email: '',
      password: '', // Campo de contraseña
      campaign: '',
    };
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`
      <div class="container">
        <h2>Registro</h2>
        <!-- Agrega campos de registro, por ejemplo: -->
        <input type="text" placeholder="Nombre" .value="${this.userData.name}" @input="${(e) => this.userData.name = e.target.value}">
        <input type="email" placeholder="Email" .value="${this.userData.email}" @input="${(e) => this.userData.email = e.target.value}">
        <input type="password" placeholder="Contraseña" .value="${this.userData.password}" @input="${(e) => this.userData.password = e.target.value}">
        <input type="text" placeholder="Campaña" .value="${this.userData.campaign}" @input="${(e) => this.userData.campaign = e.target.value}">
        <!-- Agrega más campos según tus necesidades -->

        <button class="register-button" @click="${this.registerUser}">Registrar</button>
      </div>
    `;
  }

  validateForm() {
    // Realiza las validaciones necesarias
    const { name, email, password, campaign } = this.userData;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || campaign.trim() === '') {
      // Si algún campo está vacío, considera que los datos son inválidos
      window.alert('Todos los campos son obligatorios.');
      return false;
    }

    // Validar el formato del correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      window.alert('El correo electrónico no es válido.');
      return false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      window.alert('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    return true; // Si todos los campos son válidos
  }

  registerUser() {
    // Validar el formulario antes de proceder
    if (this.validateForm()) {
      // Aquí puedes guardar los datos del usuario registrado en tu aplicación
      // Por ejemplo, puedes utilizar una API para enviar los datos al servidor

      // Después de guardar los datos, redirige al usuario de nuevo a la página de inicio
      renderPage('index');
    }
  }
}

customElements.define('registration-component', Registration);
