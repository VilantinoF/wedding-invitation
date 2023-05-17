import { css } from '@emotion/core';
import Bca from '@assets/images/bca.png';

export const bankStyle = css`
  position: relative;
  left: -13px;
  text-align: left;
  color: white;
  h4 {
    color: white;
    margin-bottom: 0px;
    margin-top: 10px;
  };

  i {
    background-image: url(${Bca});
  }

  span {
    margin-left: 0px !important;
  }
`;
