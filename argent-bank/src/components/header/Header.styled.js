import styled from 'styled-components';

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  // .main-nav a.router-link-exact-active {
  //   color: #42b983;
  // }

  a:last-of-type {
    text-decoration: none;
    margin-right: 0.5rem;
  }

  a:last-of-type:hover {
    text-decoration: underline;
  }

  a:first-of-type {
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
      width: 200px;
    }
  }
`;

export default StyledHeader;
