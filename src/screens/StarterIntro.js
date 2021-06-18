import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 30px;
`;
const WelcomeText = styled.Text`
  font-size: 26px;
  margin-top: 60px;
`;
const WelcomeImage = styled.View`
  width: 250px;
`;
const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
const BeginConfigArea = styled.View`
  width: 100%;
  margin: 30px;
`;
const ButtonText = styled.Text`
  color: #fff;
`;

const Page = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <WelcomeText>Bem vindo ao FitDev</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require("../assets/boneco.png")} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton>
          <ButtonText
            onPress={() => navigate("StarterName")}
            underlayColor="#191919"
          >
            Iniciar Configuracao
          </ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

Page.navigationOptions = {
  headerShow: false
};

export default Page;
