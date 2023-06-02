import styled from 'styled-components/native';
import {FontAwesome, MaterialIcons, Ionicons} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  display: flex;
  justify-content: center;
`;

export const ErrMsg = styled.Text`
  color: red;
`;

export const createIcon = (type: 'mt' | 'fa' | 'io') => {
  let iconType = null;

  switch (type) {
    case 'mt':
      iconType = MaterialIcons;
      break;
    case 'io':
      iconType = Ionicons;
      break;
    case 'fa':
    default:
      iconType = FontAwesome;
  }

  return styled(iconType)`
    color: ${p => p.theme.colors.txt.p};
  `;
};

export const IconWrapper = styled.TouchableOpacity`
  bottom: 0;
  right: 0;
  position: absolute;

  align-items: center;
  justify-content: center;

  height: 60%;
  width: 40px;
`;

type LabelProps = {
  colorMode?: 'primary' | 'secondary';
};

export const Label = styled.Text<LabelProps>`
  margin-bottom: 5px;
  font-size: ${RFValue(15)}px;
  color: ${p =>
    p.colorMode === 'secondary'
      ? p.theme.colors.txt.s
      : p.theme.colors.txt.p};
`;

interface TxtInputProps {
  error?: boolean;
  center?: boolean;
  hasIcon?: boolean;
}

export const TxtInput = styled.TextInput.attrs(p => ({
  placeholderTextColor: '#B0B0B0',
  selectionColor: p.theme.colors.btn,
  elevation: 3,
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowColor: '#171717',
}))<TxtInputProps>`
  background-color: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.txt.p};
  padding: 2px 10px;
  height: 100%;
  ${p => (p.center ? 'text-align: center;' : '')}
  ${p => (p.hasIcon ? 'padding-right: 35px;' : '')}

  border: 1.8px solid;
  border-radius: 6px;
`;
