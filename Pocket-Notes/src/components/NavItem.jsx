import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatString, getInitials } from "../utils/helper";

const StyledNavItem = styled.li`
  font-size: 1.2rem;
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.clickable ? "#e0e0e0" : ""};
  }

`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

function NavItem({ item, index, clickable = true }) {
    // List of colors
    const colors = [
        '#FF5733', '#18be36', '#3357FF', '#FF33A1', '#0ec9bd',
        '#dad603', '#FF9A33', '#9133FF', '#33FF94', '#FF5733',
    ];

    return (
        <>
            {clickable ?
                <Link to={`notes/${formatString(item)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <StyledNavItem clickable={clickable}>
                        <Icon color={colors[index % colors.length]}>
                            {getInitials(item)}
                        </Icon>
                        {item}
                    </StyledNavItem>
                </Link> :
                <StyledNavItem clickable={clickable}>
                    <Icon color={colors[index % colors.length]} >
                        {getInitials(item)}
                    </Icon>
                    {item}
                </StyledNavItem>
            }
        </>
    );
}

export default NavItem;