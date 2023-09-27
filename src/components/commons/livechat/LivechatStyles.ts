import styled from "@emotion/styled";

export const TalkWrapper = styled.form`
  margin-top: 20px;
  width: 30%;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const TalkHeader = styled.div`
  width: 100%;
  height: 59px;
  background-image: url("./images/chatheader.png");
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const TalkContents = styled.div`
  width: 100%;
  height: 450px;
  background-color: #ededed;
  overflow-y: scroll;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 0px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Text = styled.div`
  max-width: 80%;
  word-break: break-all;
  background-color: #ffcf00;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 11px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TalkWrite = styled.input`
  width: 100%;
  height: 50px;
  font-size: 13px;
  border-radius: 0px 0px 20px 20px;
  border: 2px solid #ededed;
  border-top: none;
  padding: 10px;
  ::placeholder {
    font-size: 11px;
    display: flex;
    justify-content: center;
  }
  :focus {
    outline: none;
  }
`;
