import styled from 'styled-components/native';
import {
  Feather,
  Ionicons,
  AntDesign,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Octicons,
  Fontisto,
  Entypo,
} from '@expo/vector-icons';

import {IconType} from '.';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const createIcon = (type: IconType, color?: string) => {
  let source = null;

  switch (type) {
    case 'fontAwesome':
      source = FontAwesome;
      break;
    case 'material':
      source = MaterialIcons;
      break;
    case 'ionicons':
      source = Ionicons;
      break;
    case 'material-community':
      source = MaterialCommunityIcons;
      break;
    case 'antdesign':
      source = AntDesign;
      break;
    case 'fontAwesome5':
      source = FontAwesome5;
      break;
    case 'octicons':
      source = Octicons;
      break;
    case 'fontisto':
      source = Fontisto;
      break;
    case 'entypo':
      source = Entypo;
      break;
    case 'feather':
    default:
      source = Feather;
  }

  return styled(source)`
    color: ${({theme}) => (color ? color : theme.colors.input.text)};
  `;
};
