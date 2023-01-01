import styled from "@emotion/styled";

export const Herosection = styled.div`
  align-items: center;
  background-image: linear-gradient(15deg, #f7d3d3 0%, #2a6973 150%);
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-content: center;
  position: relative;
  left: 200px;
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
  .card-grid:hover > .card:not(:hover) .card__background {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }
`;

export const Card = styled.a`
  list-style: none;
  position: relative;
  .card:before {
    content: "";
    display: block;
    padding-bottom: 150%;
    width: 100%;
  }
  .card:hover .card__background {
    transform: scale(1.05) translateZ(0);
  }
`;

export const CardBackGreound = styled.img`
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
`;

export const CardContent = styled.div`
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
`;

export const CardCategory = styled.p`
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
`;

export const CardHeading = styled.h3`
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  word-spacing: 100vw;

  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 45px;
  top: 85px;
`;
