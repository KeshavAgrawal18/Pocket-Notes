import styled from "styled-components";

const MessageContainer = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
`;

const DateTime = styled.div`
  font-size: 0.8rem;
  color: gray;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px; 

  & span {
    margin: 0 5px;
  }
`;

function Message({ text, date, time }) {
    console.log({ date, time });

    return (
        <MessageContainer>
            {text}
            <DateTime>
                {date}
                <span><strong>&bull;</strong></span>
                {time}
            </DateTime>
        </MessageContainer>
    );
}

export default Message;