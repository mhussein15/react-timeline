import styled, { keyframes, createGlobalStyle } from "styled-components";
import { lightSpeedIn } from "react-animations";
const bounceAnimation = keyframes`${lightSpeedIn}`;

export const GlobalStyles = createGlobalStyle`
 body{
    background-color:#475C7A;
      font-family: 'Press Start 2P', cursive;
  }
`;

export const HeaderView = styled.div`
  height: 100vh;
  background-color: #fcbb6d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23fcbb6d' width='11' height='11'/%3E%3Crect fill='%23fdb86e' x='10' width='11' height='11'/%3E%3Crect fill='%23fdb46f' y='10' width='11' height='11'/%3E%3Crect fill='%23feb170' x='20' width='11' height='11'/%3E%3Crect fill='%23feae71' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23feab73' y='20' width='11' height='11'/%3E%3Crect fill='%23fda874' x='30' width='11' height='11'/%3E%3Crect fill='%23fda576' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23fca277' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23fb9f79' y='30' width='11' height='11'/%3E%3Crect fill='%23fa9c7b' x='40' width='11' height='11'/%3E%3Crect fill='%23f9997d' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23f8977e' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23f69480' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23f49282' y='40' width='11' height='11'/%3E%3Crect fill='%23f38f84' x='50' width='11' height='11'/%3E%3Crect fill='%23f08d86' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23ee8b88' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23ec8989' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23e9878b' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23e6858d' y='50' width='11' height='11'/%3E%3Crect fill='%23e3838e' x='60' width='11' height='11'/%3E%3Crect fill='%23e08290' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23dd8091' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23da7f93' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d67d94' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d37c95' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23cf7b96' x='70' width='11' height='11'/%3E%3Crect fill='%23cb7997' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23c77898' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23c37799' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23bf769a' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23bb759b' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23b6749b' x='80' width='11' height='11'/%3E%3Crect fill='%23b2739b' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23ad739c' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23a9729c' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23a4719c' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23a0709b' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%239b6f9b' x='90' width='11' height='11'/%3E%3Crect fill='%23966f9b' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23926e9a' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%238d6d99' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23886c98' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23846b97' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%237f6b96' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%237b6a95' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23766993' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23726892' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%236d6790' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%2369668e' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2365658d' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%2361648b' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%235d6388' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23596286' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23556184' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23516082' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%234e5e7f' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%234a5d7d' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23475c7a' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    animation: 1s ${bounceAnimation};
    font-size: 100px;
    color: #f1f2f6;
    padding: 10px;
    font-size:70px;
  }
`;

export const TimelineCardData = styled.div`
  h3 {
    font-weight: bolder;
    font-size: 32px;
    margin-bottom: 10px;
  }
  h4 {
    font-weight: bolder;
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-weight: bolder;
    font-size: 15px;
  }
`;

export const FooterView = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.backgroudColorYellow};
  padding: 20px;
  color: #f5f6fa;
  font-weight:bolder;
`;
