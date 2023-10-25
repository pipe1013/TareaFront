import { css } from "lit-element";

export default css `

.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 60px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button.register-button {
    display: block;
    padding: 0.5rem 1rem;
    width: 200px;
    margin: 0 auto;
    width: 50%;
    padding: 10px;
    margin-top: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
  }
  
  button.register-button:hover {
    background-color: #0056b3;
  }
  `