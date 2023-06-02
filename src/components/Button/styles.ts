import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  width?: string;
  outline?: boolean;
  disabled?: boolean;
}

export const Container = styled(RectButton).attrs({
  elevation: 3,
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowColor: '#171717',
})<Props>`
  width: ${({width}) => width ?? '100%'};
  height: 45px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: ${({theme, outline, enabled}) =>
    outline
      ? 'transparent'
      : enabled
      ? theme.colors.btn
      : theme.colors.dsb};
`;

export const BorderWrapper = styled.View<Props>`
  flex: 1;
  width: 100%;
  position: relative;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
`;

export const Value = styled.Text<Props>`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) =>
    theme.colors.txt.p};
`;

interface IconProps {
  onLeft?: boolean;
}

export const IconView = styled.View<IconProps>`
  ${({onLeft}) => (onLeft ? 'left: 36px;' : 'right: 15px;')}
  position: absolute;
`;
