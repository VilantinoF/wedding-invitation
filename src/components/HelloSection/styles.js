import { css } from '@emotion/core';
import Background from '@assets/images/bg-3.png';

export const styWrapper = css`
  background-image: url(${Background});
  background-position: 58% 5%;

  .main-font {
    color: #F3EFE0;
  }
  .sub-title {
    color: #F3EFE0;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
    color: #F3EFE0;
  }

  i {
    color: #F3EFE0;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }

  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img.img-bride {
    transform: scaleX(-1);
  }

  img.img-groom {
    transform: scaleX(-1);
  }

`;
