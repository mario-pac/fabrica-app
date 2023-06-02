import React, { useState } from "react";
import { Control, Path, useController, Validate } from "react-hook-form";
import { StyleProp, StyleSheet, TextInputProps, ViewStyle } from "react-native";

import { useTheme } from "styled-components/native";

import {
  ErrMsg,
  TxtInput,
  Container,
  createIcon,
  Label,
  IconWrapper,
} from "./style";

export interface InputProps extends TextInputProps {
  label?: {
    value: string;
    colorMode?: "primary" | "secondary";
  };
  error?: string;
  center?: boolean;
  icon?: {
    type: "mt" | "fa" | "io";
    name: string;
    onPress?: () => void;
  };
  style?: StyleProp<ViewStyle>;
  hideErrMsg?: boolean;
  borderRadius?: number;
  disabledBg?: boolean;
  isTextBox?: boolean;
  outline?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  style,
  isTextBox,
  hideErrMsg,
  disabledBg,
  borderRadius = 6,
  outline,
  onBlur,
  onFocus,
  ...rest
}) => {
  const theme = useTheme();

  const Icon = createIcon(icon ? icon.type : "fa");

  const height = StyleSheet.flatten(style)?.height ?? 45;
  const st = StyleSheet.compose(style, { height: undefined });

  return (
    <Container style={st}>
      {!!label && <Label colorMode={label.colorMode}>{label.value}</Label>}
      <TxtInput
        style={{
          height,
          borderRadius: borderRadius,
          textAlignVertical: isTextBox ? "top" : undefined,
          backgroundColor: disabledBg ? "#ccc" : theme.colors.bg,
          borderColor: theme.colors.txt.p,
        }}
        error={!!error}
        {...(rest as any)}
        hasIcon={icon !== undefined}
        onFocus={(e) => {
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
        }}
        multiline={isTextBox ? true : undefined}
        numberOfLines={isTextBox ? 4 : undefined}
      />
      {icon !== undefined ? (
        <IconWrapper onPress={icon.onPress}>
          <Icon name={icon.name} size={20} />
        </IconWrapper>
      ) : null}
      {!!error && !hideErrMsg && <ErrMsg>{error}</ErrMsg>}
    </Container>
  );
};

interface InputFormProps<T extends object> extends InputProps {
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
  validate?: Validate<string, T>;
  disabled?: boolean;
}
export function InputForm<T extends object = Record<string, unknown>>({
  name,
  control,
  required,
  validate,
  onBlur,
  disabled,
  ...rest
}: InputFormProps<T>) {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: "" as any,
    rules: {
      required,
      validate,
      onBlur,
    },
  });
  return (
    <Input
      {...rest}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
      outline={
        fieldState.isDirty && validate && !validate(field.value, {} as T)
      }
      editable={!disabled}
      disabledBg={disabled}
    />
  );
}

export default Input;
