import styled from "styled-components";

const Header = () => {
  return <MainHeader>Header</MainHeader>;
};

const MainHeader = styled.header`
  padding: 0.4rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
