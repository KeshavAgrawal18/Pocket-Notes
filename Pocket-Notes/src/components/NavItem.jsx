import styled from "styled-components";

const StyledNavItem = styled.li`
  font-size: 1.2rem;
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
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

function NavItem({ item, index }) {
    // List of colors
    const colors = [
        '#FF5733', '#18be36', '#3357FF', '#FF33A1', '#0ec9bd',
        '#dad603', '#FF9A33', '#9133FF', '#33FF94', '#FF5733',
    ];

    const getInitials = (item) => {
        const words = item.split(' ');
        if (words.length === 1) {
            return words[0].charAt(0);
        } else {
            return words[0].charAt(0) + words[1].charAt(0);
        }
    };


    return (
        <StyledNavItem>
            <Icon color={colors[index % colors.length]}>
                {getInitials(item)}
            </Icon>
            {item}
        </StyledNavItem>
    );
}

export default NavItem;