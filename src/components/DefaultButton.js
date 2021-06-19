import styled from "styled-components/native";

export default styled.TouchableHighlight`
  width: ${props => props.width || "auto"};
  padding: 16px 30px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || "#212841"};
  margin-bottom: 16px;
  text-align: center;
`;
