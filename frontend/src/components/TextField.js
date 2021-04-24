import React, { Component, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import styles, { Fonts } from "../Styles";

const TextField = (props) => {
  const {
    label,
    error1,
    error2,
    value,
    error,
    hint,
    mask,
    maskType,
    maxDecimalPlaces,
    maxLength,
    isPassword,
    secureText,
    onChangeText,
    autoCapitalize,
    keyboardType,
    leftComponent,
  } = props;

  let field;
  field = (
    <FloatingLabelInput
      label={label}
      containerStyles={error1 || error2 ? styles.textboxerror : styles.textbox}
      customLabelStyles={
        error1 || error2
          ? {
              colorFocused: "#FF0000",
              colorBlurred: "#FF0000",
              fontFamily: Fonts.Font,
            }
          : {
              colorFocused: "#898989",
              colorBlurred: "#898989",
              fontFamily: Fonts.Font,
            }
      }
      labelStyles={{
        fontFamily: Fonts.FontBold,
      }}
      inputStyles={{
        color: "#000000",
        paddingHorizontal: 5,
        fontFamily: Fonts.Font,
      }}
      value={value}
      hint={hint}
      mask={mask}
      maskType={maskType}
      maxDecimalPlaces={maxDecimalPlaces}
      maxLength={maxLength}
      isPassword={isPassword}
      secureTextEntry={secureText}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      leftComponent={leftComponent}
    />
  );

  return (
    <View>
      {field}
      {error1 || error2 ? (
        <Text style={styles.texterror}>{error}</Text>
      ) : (
        <Text style={styles.texterror}> </Text>
      )}
    </View>
  );
};

const styles1 = StyleSheet.create({});

export default TextField;

TextField.defaultProps = {
  label: undefined,
  error1: false,
  error2: false,
  value: undefined,
  error: undefined,
  hint: undefined,
  mask: undefined,
  maskType: undefined,
  maxDecimalPlaces: undefined,
  maxLength: undefined,
  isPassword: false,
  secureText: false,
  onChangeText: undefined,
  autoCapitalize: "words",
  keyboardType: undefined,
  leftComponent: undefined,
};
