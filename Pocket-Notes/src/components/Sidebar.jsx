import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0;
  overflow-y: scroll;
`;

const AddButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
  right: 20px;

  &:hover {
    background-color: darkblue;
  }
`;

function Sidebar() {
  const navItems = [
    "My Notes",
    "My Personal grp",
    "javaScript grp",
    "java",
    "My Notes",
    "My Personal grp",
    "javaScript grp",
    "java",
    "My Notes",
    "My Personal grp",
    "javaScript grp",
    "java",
  ];

  return (
    <div>
      <Container>
        <Link to="/">
          <Header>Pocket Notes</Header>
        </Link>
        <NavList>
          {navItems.map((item, index) => (
            <NavItem key={index} index={index} item={item} />
          ))}
        </NavList>
        <AddButton>
          <FaPlus />
        </AddButton>
      </Container>
    </div>
  );
}

export default Sidebar;
