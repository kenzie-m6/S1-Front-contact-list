import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }

.userInfo{
  display: flex;
  flex-direction: column;
  align-items: start;
}

  div {
    display: flex;
    align-items: center;
    gap: .5rem;

    div > img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  div > h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .ButtonsContainer {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      padding: 0.5rem;
      background-color: #333;
      color: #fff;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #666;
      }
    }
  }
`;
