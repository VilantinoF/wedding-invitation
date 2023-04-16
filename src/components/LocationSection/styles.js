import { css } from '@emotion/core';

export const styWrapper = css`

button {
  border: none;
  border-radius: 30%;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  position: absolute;
  right: 34%
  }

  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
