import styled, { css } from 'styled-components';
import { darken } from 'polished';

type SummaryProps = {
  highlight?: boolean;
  negative?: boolean;
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Summary = styled.div<SummaryProps>`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 4px;
  color: var(--text-title);

  transition: background-color 200ms;

  ${({ highlight }) =>
    highlight &&
    css`
      background-color: var(--green);
      color: #fff;
    `}

  ${({ negative }) =>
    negative &&
    css`
      background-color: ${darken(0.1, '#e52e4d')};
      color: #fff;
    `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
