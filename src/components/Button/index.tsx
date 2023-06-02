import React from "react";

import Icon, { IconProps } from "../Icon";

import * as S from "./styles";
import Loading from "../Loading";

interface ButtonProps {
  value: string;

  width?: string;
  icon?: IconProps;
  outline?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  iconOnLeft?: boolean;
  loadingAction?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <S.Container
      width={props.width}
      outline={props.outline}
      onPress={props.onPress}
      enabled={!props.loadingAction && !props.disabled}
    >
      <S.BorderWrapper outline={props.outline}>
        {props.loadingAction ? (
          <Loading />
        ) : (
          <React.Fragment>
            <S.Value outline={props.outline}>{props.value}</S.Value>
            {!!props.icon && (
              <S.IconView onLeft={props.iconOnLeft}>
                <Icon {...props.icon} />
              </S.IconView>
            )}
          </React.Fragment>
        )}
      </S.BorderWrapper>
    </S.Container>
  );
};

export default Button;
