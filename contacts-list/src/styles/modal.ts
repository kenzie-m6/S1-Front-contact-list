import styled from "styled-components";

export const ModalStyle = styled.div`
  position: absolute;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .containerModal {
    background-color: grey;
    width: 90%;
    max-width: 400px;
    border-radius: 6px;
    animation: slideIn 2s;
    padding: 1rem;
  }

  @keyframes slideIn {
    0% {
      margin-top: -70px;
      opacity: 0;
    }
    100% {
      margin-top: unset;
      opacity: 1;
    }
  }

  .headerModal {
    background-color: var(--grey-2);
    border-radius: 4px 4px 0 0;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    align-items: center;
  }

  h3 {
    margin: 0;
  }

`;
