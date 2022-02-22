import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarItem from "./components/CarItems";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name="Mercedes AMG"
        tagline="Order Online for"
        taglineCTA="Touchless Delivery"
        image={require("./assets/images/mercedes-amg.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// Starting at $43,000
