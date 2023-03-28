import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;

  .buttonContainer {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

  @media screen and (min-width: 768px) {
    max-width: 600px;
    
    button {
    
        background-color: #0077b6;
        color: #fff;
        font-size: 1rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      
        &:hover {
          background-color: #023e8a;
        }
      
        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
    }

  }
`;

