import styled from "styled-components";

export const InputContainer = styled.fieldset`
  margin: 20px 0;
  max-width: fit-content;
  margin: 0 auto;
  border: none;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  input {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #555;
    background-color: #fff;
    transition: border-color 0.3s ease-in-out;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

    &:hover,
    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  p {
    margin-top: 5px;
    color: #dc3545;
    font-size: 14px;
    font-weight: 600;
  }
`;
