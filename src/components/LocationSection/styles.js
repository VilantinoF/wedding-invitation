import { css } from '@emotion/core';
import Background from '@assets/images/1681664251774.jpg';

export const styWrapper = css`
  color: #fff;
  background-image: url(${Background});
  background-position: 50% 50%;
  background-size: cover;


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

  button a {
    color: darkslategrey;
  }

  p a {
    color: #fff;
  }

  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
      color: #fff;
    }
  }
`;
