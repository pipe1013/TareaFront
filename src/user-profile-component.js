import { LitElement, html, css, property } from "lit-element";

export class UserDetailsComponent extends LitElement {
  @property({ type: Object }) userData;

  render() {
    return html`
      <div>
        <h2>Datos del Usuario</h2>
        <p>Nombre: ${this.userData.name}</p>
        <p>Email: ${this.userData.email}</p>
        <!-- Agrega más campos según tus necesidades -->
      </div>
    `;
  }
}

customElements.define("user-details-component", UserDetailsComponent);
