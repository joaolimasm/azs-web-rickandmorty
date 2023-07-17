import styled from "styled-components";

export const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    box-shadow: none;
    text-transform: uppercase;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin-top: 1rem;
  }
  .btn-search{
    box-shadow: none !important;
    text-transform: uppercase;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin-top: 1rem;
  }
  .header {
    height: 8rem;
    background-color: white;
    box-shadow: #009be7 0px 2px 8px;
    border-radius: 0.0625rem;
    display: flex;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
  }
 
  .redirect-link {
    text-decoration: none;
  }
  .card {
    border: 2px solid #009be7;
    border-radius: 1rem;
    width: 30rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .input-text{
    margin-top: 2rem;
    display: flex;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .img {
    border-radius: 1rem;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
