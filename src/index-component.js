import { LitElement, html } from "lit-element";
import stylesScss from './index-componentStyles';
import { renderPage } from './main.js';

export class Index extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`
    <!-- Botón para cerrar sesión -->
    <button class="logout-button" @click="${() => this.logoutAndReturn()}">Cerrar Sesión</button>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div class="d-flex ">
    <div class="pt-2 d-flex justify-content-left ">
        <div class="d-flex  flex-shrink-0 p-3 ml-5" style="width: 250px; background-color: rgb(201, 205, 207); border-radius: 1rem; height: 42.4rem; ">
            <hr>
            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                <li class="nav-item">
                    <button  @click="${() => renderPage('index')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Usuarios
                    </button>
                </li>
                <li class="nav-item pt-3">
                    <button  @click="${() => renderPage('index2')}" class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Campañas
                    </button>
                </li>
                <li class="nav-item pt-3">
                    <button class="nav-link active bg-light pt-2 font-weight-bold" style="color: grey; border-radius: 10px; height: 45px; width: 13.5rem; font-size: 18px;" aria-current="page">
                        <i class="fas fa-user me-2"></i> Equipos
                    </button>
                </li>
            </ul>
            <hr>
        </div>
    </div>
    &nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp
    <!-- cajas de texto-->
    <div class="pt-2  align-items-center">
        <div class="d-flex justify-content-left ">
            &nbsp&nbsp&nbsp
            &nbsp&nbsp&nbsp
            <div class="row d-flex">
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">40</div>
                    <div id="cajas2" class="col-md-5  pt-2">Usuarios Conectados</div>
                </div>
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">10</div>
                    <div id="cajas2" class="col-md-5  pt-2">Usuarios Ausentes</div>
                </div>
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                &nbsp&nbsp&nbsp
                <div class="row g-0 text-center pt-3 ">
                    <div id="cajas" class="col-sm-6 col-md-4">10</div>
                    <div id="cajas2" class="col-md-5  pt-2">Campañas Activas</div>
                </div>
            </div>
        </div>
        <br>

        <div id="cuadro" class="container border border-dark">
            <div class="d-flex p-3" >
                <div class=" border border-dark" style="width: 14rem; height: 33.3rem; border-radius: 1rem;">
                    <div>
                        <div class="d-flex  flex-shrink-0 p-3" style="width: 222px; background-color: rgb(201, 205, 207); border-top-left-radius: 1rem; border-top-right-radius: 1rem; height: 15rem; ">
                            <hr>
                            <ul class="nav nav-pills flex-column mb-auto" style="width: 25rem;">
                                <div class="input-group mt-1" style="width: 12rem;">
                                    <input class="form-control font-weight-bold" type="text" placeholder="Número">
                                </div>
                                <div class="input-group mt-3" style="width: 12rem;">
                                    <input class="form-control font-weight-bold" type="text" placeholder="Nombre">
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="mt-2 text-center" style=" width: 5rem; border-radius: 5px; border: rgb(250, 101, 101); background-color: rgb(250, 101, 101); color: white;">Buscar</button>
                                </div>
                            </ul>
                            <hr>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-around ">
                        <div class=" ml-5">
                        <div class="row g-0 text-center pt-1 ">
                        <button class="col-sm-8 col-md-8 pt-2 border border-secondary font-weight-bold" style="width: 10rem; font-size: 20px; height: 3rem; border-radius: 7px;">Basico</button>
                        <div class="col-md-3"></div>
                      </div>    
                        </div>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <div class="d-flex justify-content-right ml-5">
                            <button class="mt-1 text-center" style=" width: 5rem; height: 40px; border-radius: 5px; border: rgb(250, 101, 101); background-color: rgb(250, 101, 101); color: white;">Nuevo</button>
                        </div>
                    </div>
                    <div class="container border border-dark mt-4 ml-4" style="border-radius: 1rem; width: 38rem; height: 28.5rem;">
                        
                    </div>
                </div>
                
            </div>
            
        </div> 
    </div>   
</div>    

    `;
  }

  logoutAndReturn() {
    // Cerrar sesión y regresar al login
    localStorage.removeItem('isLoggedIn');
    renderPage('login');
  }
}

customElements.define("index-component", Index);