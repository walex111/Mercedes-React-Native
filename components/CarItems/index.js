import React from "react";
import { View, Text, ImageBackground } from "react-native";
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
    </View>
  );
};

export default CarItem;
