import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background-color: #1f2029;
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 40px;
  color: #ffeba7;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const Circle = styled.span`
  height: 50px;
  width: 50px;
  border: 6px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  animation: animate 1s linear infinite;
  position: relative;
  &:after {
    height: 38px;
    width: 38px;
    content: ' ';
    position: absolute;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-radius: 50px;
    border: 6px solid transparent;
    border-top-color: #ffeba7;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Loader() {
  return (
    <Container>
      <Circle />
      Chargement ...
    </Container>
  )
}
export default Loader
