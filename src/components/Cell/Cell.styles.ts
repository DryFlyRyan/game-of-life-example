import styled from 'styled-components';
import { Cell } from './Cell';

export const StyledCell = styled.div`
  border: 1px solid rgb(100, 100, 100);
  height: 20px;
  width: 20px;
  background: ${(props: Cell) => props.alive ? '#000' : '#fff'};
`;