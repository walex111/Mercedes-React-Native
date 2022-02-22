import { Text, View, Pressable } from "react-native";
import React from "react";

import styles from "./styles";

const StyledButton = (props) => {
  const type = props.type;

  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffffa6" : "#171a20cc";
  return (
    <View style={styles.ButtonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={props.onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {props.content}
        </Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
