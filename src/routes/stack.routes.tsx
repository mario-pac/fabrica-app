import React from "react";
import { useTheme } from "styled-components/native";
import {
  createStackNavigator,
  CardStyleInterpolators as Animation,
} from "@react-navigation/stack";
import { RFValue } from "react-native-responsive-fontsize";
import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.bg,
        },
        headerTintColor: theme.colors.txt.p,
        headerShadowVisible: true,
        headerStatusBarHeight: 0,
        headerTitleContainerStyle: {
          marginStart: 0,
          marginEnd: 3,
        },
        headerRightContainerStyle: {
          paddingTop: 4,
          paddingRight: 10,
        },
        headerTitleStyle: {
          paddingTop: 4,
          fontSize: RFValue(18),
          color: theme.colors.txt.p,
        },
        cardStyle: {
          backgroundColor: theme.colors.bg,
        },
        cardStyleInterpolator: Animation.forHorizontalIOS,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}
