import styled from "styled-components";
import { Button, Checkbox, TextareaAutosize } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  gap: 25px;
`;

export const CustomTextArea = styled(TextareaAutosize)`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  resize: none;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 20px;
`;

export const CustomButton = styled(Button)`
  width: 150px;
  height: 37px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fafafa;
  &:hover {
    background-color: #fafafa;
  }
`;

export const RemoveButton = styled(Button)`
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fafafa;

  align-self: flex-end;

  &:hover {
    background-color: #fafafa;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  columns: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: #fafafa;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  width: 300px;
  gap: 10px;
`;

export const CustomCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fafafa;

  &:hover {
    background-color: #fafafa;
  }
`;

export const CustomText = styled.span`
  margin-left: 10px;
`;
