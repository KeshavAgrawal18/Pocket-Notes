import styled from "styled-components";
import NavItem from "./NavItem";
import Message from "./Message";

const StyledNotes = styled.div`
  background-color: #dae5f5;
  min-height: 100vh;
`;

const Header = styled.div`
  background-color: ${(props) => props.bgColor};
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  position: fixed;
  width: 100%;
`;

const Content = styled.div`
  margin: 80px 0;
  padding: 15px;
  font-size: 1rem;
  overflow-y: scroll;
`;

function Notes() {
    const messages = [
        {
            text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
            date: "9 Mar 2024",
            time: "10: 00 p.m.",
        },
        {
            text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
            date: "9 Mar 2024",
            time: "10: 00 p.m.",
        },
        {
            text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
            date: "9 Mar 2024",
            time: "10: 00 p.m.",
        },
        {
            text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
            date: "9 Mar 2024",
            time: "10: 00 p.m.",
        },
        {
            text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
            date: "9 Mar 2024",
            time: "10: 00 p.m.",
        },
        {
            text: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
            date: "9 Mar 2024",
            time: "10: 00 p.m.",
        },
    ];
    const headerBgColor = "#18be36";
    return (
        <StyledNotes>
            <Header bgColor={headerBgColor}>
                <NavItem index={0} item="My Notes" clickable={false} />
            </Header>
            <Content>
                {messages.map((item) => (
                    <Message text={item.text} date={item.date} time={item.time} />
                ))}
            </Content>
        </StyledNotes>
    );
}

export default Notes;
