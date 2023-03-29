import styled from "styled-components";

export const ContactsContainer = styled.div`
  .addContacts {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }
  .addContacts > button {
    font-weight: 700;
    font-size: 20px;
  }

  ul {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  ul > li {
    width: 100%;
    max-width: 300px;
    height: 105px;
  }
`;
