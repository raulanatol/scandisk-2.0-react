import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../../../Theme';

const IdBlock = styled.span<any>`
  text-align: center;
  display: block;
  &::before {
    content: ${props => props.theme?.content};
    color: ${props => props.theme?.color};
    font-weight: ${props => props.theme?.fontWeight};
  }
`;

type StageStatus = 'current' | 'pending' | 'correct' | 'fixed';

export interface StageProp {
  name: string;
  status: StageStatus;
}

const getThemeByStatus = (status: StageStatus) => {
  if (status === 'correct') {
    return { content: '♦', color: Colors.CYAN };
  }

  if (status === 'current') {
    return { content: '»', color: Colors.CYAN }
  }

  if (status === 'fixed') {
    return { content: 'fixed', color: Colors.RED, fontWeight: 'bold' }
  }

  return {};
};

export const Stage: FC<StageProp> = ({ name, status }) => {
  const theme = getThemeByStatus(status);
  return <>
    <IdBlock theme={theme}/> <span>{name}</span>
  </>;
};
