import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={props.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subTitle}>
          {props.tagline}{" "}
          <Text style={styles.subTitleCTA}>{props.taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
