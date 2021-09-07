import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th,
    td {
      padding: 1rem 2rem;
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

    td.title {
      color: var(--text-title);
    }

    td.deposit {
      color: var(--green);
    }

    td.withdraw {
      color: var(--red);
    }
  }
`;
