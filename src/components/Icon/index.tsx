import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './styles';

export type IconType =
  | 'feather'
  | 'fontAwesome'
  | 'material'
  | 'ionicons'
  | 'antdesign'
  | 'material-community'
  | 'fontAwesome5'
  | 'octicons'
  | 'fontisto'
  | 'entypo';

export interface IconProps {
  type: IconType;
  size: number;
  name: string;
  disabled?: boolean;
  color?: string;

  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({
  type,
  size,
  name,
  color,
  disabled = false,
  onPress,
}) => {
  const Source = S.createIcon(type, color);

  return (
    <S.Container>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Source name={name} size={size} />
      </TouchableOpacity>
    </S.Container>
  );
};

export default Icon;
