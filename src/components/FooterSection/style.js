import { css } from '@emotion/core';
import Bca from '@assets/images/bca.png';

export const bankStyle = css`
  position: relative;
  left: -13px;
  text-align: left;
  color: white;
  h3 {
    color: white;
  };

  i {
    background-image: url(${Bca});
  }
`;
