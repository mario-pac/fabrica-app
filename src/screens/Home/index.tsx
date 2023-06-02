import React from "react";

import * as S from "./styles";
import { Image } from "react-native";
import Logo from "../../assets/logo.png";
import Spacer from "../../components/Spacer";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Image source={Logo} resizeMode="contain" />
      <Spacer height={48} />
      <Input
        label={{
          value: "Qual é o capital disponível?",
        }}
        keyboardType="number-pad"
      />
      <Spacer height={12} />
      <Input
        label={{
          value: "Há quanto tempo disponível?",
        }}
        keyboardType="number-pad"
      />
      <Spacer height={12} />
      <Input
        label={{
          value: "Digite uma medida de tempo",
        }}
        placeholder="h para horas ou m para minutos..."
      />

      <S.Footer>
        <Button value="Calcular" width="100%" />
      </S.Footer>
    </S.Container>
  );
};

export default Home;
