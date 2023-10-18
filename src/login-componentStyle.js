import { css } from "lit-element";

export default css `

@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:active {
    .top,
    .bottom {
      &:before,
      &:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
      }
    }

    .center {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
}

.top,
.bottom {
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index: 10;
    opacity: 0.65;
    transition-delay: 0.2s;
  }
}

.top {
  &:before {
    transform: rotate(45deg);
    background: #0E81A5;
  }
  &:after {
    transform: rotate(135deg);
    background: #4F2C2D;
  }
}

.bottom {
  &:before {
    transform: rotate(-45deg);
    background: #861015;
  }
  &:after {
    transform: rotate(-135deg);
    background: #1E137A;
  }
}

.center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;

  input {
    width: 100%;
    padding: 15px;
    margin: 5px;
    border-radius: 1px;
    border: 1px solid #ccc;
    font-family: inherit;
  }
  .login-button {
    background-color: #4AAECF; /* Cambio a un color pastel */
    color: #000; /* Cambio el color del texto para que combine */
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 5px; /* Reduzco el margen superior para acercar el botón al campo de contraseña */
  }
  
  .login-button:hover {
    background-color: #2490B3; /* Cambio de color al pasar el mouse */
  }
  /* Estilos CSS personalizados para la casilla de verificación y el mensaje "Recordar contraseña" */
  .form-check {
    display: flex; /* Utiliza flexbox para alinear elementos en la misma fila */
    align-items: center; /* Centra verticalmente los elementos */
    text-align: left;
    margin-top: 1px;
  }
  
  .form-check input {
    margin-right: 2px; /* Espacio entre la casilla de verificación y el mensaje */
  }
  
  .form-check label {
    font-weight: normal;
    font-size: 1rem;
  }
  

  

}
`