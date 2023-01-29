import { css } from "@linaria/core"

export const GlobalStyles = css`
  :global() {
    body {
      --color-background: #41d9c5;
      --color-text: #231f20;
      --color-primary: #231f20;
      --color-muted: #2aceb9;
      --color-active: #001d3d;
      --color-black: #000;

      --color-card-active: #2aceb9;
      --color-card-primary: #231f20;
      --color-card-muted: #303030;
      --color-card-background: #231f20;
      --color-card-text: #41d9c5;

      .display-dark {
        display: none;
      }

      &.dark {
        --color-background: #000;
        --color-text: #cfe4e6;
        --color-primary: #969696;
        --color-muted: #303030;
        --color-active: #41d9c5;
        --color-black: #000;

        .invert-dark {
          filter: invert(1);
        }

        .display-dark {
          display: block;
        }

        .hide-dark {
          display: none;
        }
      }

      /* Temp styles */
      .image-border {
        border-radius: 24px;
      }

      .hover-footer-header {
        color: var(--color-text);
      }

      .hover-footer-header:hover {
        color: var(--color-active);
      }

      @media screen and (max-width: 40em) {
        .hide-mobile {
          display: none;
        }
      }
      /* End Temp styles */

      margin: 0;
      font-family: "DM Sans", sans-serif;
      color: var(--color-text);
      background-color: var(--color-background);
      transition: background-color 0.2s ease-out;
    }

    * {
      box-sizing: border-box;
    }

    @keyframes zoomInUp {
      0% {
        transform: scale(0.95) translateY(10px) translateX(-50%);
        visibility: hidden;
        opacity: 0;
      }
      100% {
        transform: scale(1) translateY(0) translateX(-50%);
        visibility: visible;
        opacity: 1;
      }
    }

    @keyframes zoomOutDown {
      0% {
        transform: scale(1) translateY(0) translateX(-50%);
        opacity: 1;
      }
      100% {
        transform: scale(0.95) translateY(10px) translateX(-50%);
        opacity: 0;
        visibility: hidden;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        visibility: hidden;
      }
      100% {
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`
