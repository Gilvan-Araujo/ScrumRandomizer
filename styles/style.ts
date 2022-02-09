import styled from "styled-components";
import { Button, Checkbox, TextareaAutosize } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem;
  gap: 25px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 20px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  width: 250px;
  gap: 10px;
`;

export const CustomText = styled.span`
  margin-left: 10px;
`;
