import styled from "styled-components";

export const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
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
 
  .card {
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    margin-top: 2rem;
    border: 2px solid #009be7;
    border-radius: 1rem;
  }
  .p-card-title{
    margin-top: 2rem
  }
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .img {
    border: 2px solid #009be7;
    border-radius: 1rem;
    border-radius: 1rem;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.9rem;
  }
`;
