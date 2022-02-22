import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/mercedes-amg.jpg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Mercedes AMG</Text>
        <Text style={styles.subTitle}>Starting at $43,000</Text>
      </View>
      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.warn("Custom order pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing Inventory"
        onPress={() => {
          console.warn("Inventory order pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
