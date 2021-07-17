import styled from 'styled-components';

interface ConfeteContainerProps {
  delay: number;
  positionX: number;
  color: string;
}

const ConfeteContainer = styled.div<ConfeteContainerProps>`
  width: 20px;
  height: 20px;
  overflow: unset !important;

  background: ${(props) => props.color};
  position: absolute;
  top: -25px;
  left: ${(props) => `${props.positionX}px`};
  z-index: 888;
  transform: rotateZ(-45deg);

  animation: activedEffect 5s linear infinite;
  animation-delay: ${(props) => `${props.delay}ms`};

  @keyframes activedEffect {
    20% {
      transform: translateY(0vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
    }
    40% {
      transform: translateY(16vw) translateX(-3vw) rotateZ(-45deg) rotateY(-180deg);
    }
    60% {
      transform: translateY(20vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
    }
    80% {
      transform: translateY(24vw) translateX(3vw) rotateZ(-45deg) rotateY(-180deg);
    }
    100% {
      transform: translateY(40vw) translateX(3vw) rotateZ(45deg) rotateY(180deg);
    }
  }
`

export const Confete = () => {

  const colors = ['red', 'blue', 'green', 'yellow', 'black'];

  const randomDelay = (Math.random() * 1000) + 1;
  const positionX = (Math.random() * window.innerWidth) - 100;
  const randomColor = Math.floor(Math.random() * colors.length);

  console.log(colors[randomColor])
  return (
    <ConfeteContainer delay={randomDelay} positionX={positionX} color={colors[randomColor]}/>
  )
}
